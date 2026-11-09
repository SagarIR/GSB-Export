import { NextRequest, NextResponse } from "next/server";
import { prisma, isDatabaseAvailable } from "@/lib/prisma";
import { rfqSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateFile, storeAttachment } from "@/lib/storage";
import {
  sendEmail,
  generateInternalRfqNotificationHtml,
  generateCustomerAcknowledgementHtml,
} from "@/lib/email";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const rateCheck = checkRateLimit(ip, 5, 10 * 60 * 1000); // Max 5 requests per 10 mins

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    const contentType = req.headers.get("content-type") || "";
    let formDataObj: Record<string, any> = {};
    const uploadedFiles: File[] = [];

    // 2. Parse Multipart or JSON
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        if (value instanceof File) {
          if (value.size > 0 && value.name) {
            uploadedFiles.push(value);
          }
        } else {
          formDataObj[key] = value;
        }
      });
    } else {
      formDataObj = await req.json();
    }

    // 3. Zod Server-Side Validation
    const validationResult = rfqSchema.safeParse(formDataObj);
    if (!validationResult.success) {
      const errorMsg = validationResult.error.errors[0]?.message || "Invalid input data";
      return NextResponse.json({ success: false, message: errorMsg }, { status: 400 });
    }

    const data = validationResult.data;

    // 4. Honeypot Anti-Spam Check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    // 5. Generate Unique RFQ Reference Number (Format: GSB-RFQ-2026-XXXXX)
    const year = new Date().getFullYear();
    const randomSeq = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `GSB-RFQ-${year}-${randomSeq}`;

    // 6. Validate & Store Attachments
    const attachmentMetadataList = [];
    for (const file of uploadedFiles) {
      const fileValidation = validateFile(file);
      if (!fileValidation.valid) {
        return NextResponse.json(
          { success: false, message: fileValidation.error },
          { status: 400 }
        );
      }
      const stored = await storeAttachment(file);
      attachmentMetadataList.push(stored);
    }

    // 7. Save to Database (PostgreSQL via Prisma)
    const dbActive = await isDatabaseAvailable();
    let savedEnquiry = null;

    if (dbActive) {
      savedEnquiry = await prisma.enquiry.create({
        data: {
          referenceNumber,
          enquiryType: "RFQ",
          status: "NEW",
          name: data.name,
          company: data.company || null,
          email: data.email,
          phone: data.phone || null,
          country: data.country,
          companyWebsite: data.companyWebsite || null,
          productCategory: data.productCategory,
          quantity: data.quantity || null,
          fluidType: data.fluidType || null,
          inletTemperature: data.inletTemperature || null,
          outletTemperature: data.outletTemperature || null,
          operatingPressure: data.operatingPressure || null,
          flowRate: data.flowRate || null,
          material: data.material || null,
          deliveryDestination: data.deliveryDestination || null,
          technicalRequirements: data.technicalRequirements || null,
          message: data.message || null,
          attachments: {
            create: attachmentMetadataList.map((att) => ({
              originalFilename: att.originalFilename,
              storageKey: att.storageKey,
              mimeType: att.mimeType,
              fileSize: att.fileSize,
            })),
          },
        },
      });
    } else {
      console.log(`[Database Notice - Offline/Pending Mode]: Enquiry ${referenceNumber} logged safely for ${data.name} (${data.email})`);
    }

    // 8. Send Emails (Non-blocking: failures will not discard saved enquiry)
    const emailPayload = {
      ...data,
      referenceNumber,
    };

    const businessEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || "enquiry@gsbexport.com";

    // Internal Notification
    sendEmail({
      to: businessEmail,
      subject: `[New RFQ: ${referenceNumber}] ${data.productCategory} - ${data.company || data.name} (${data.country})`,
      html: generateInternalRfqNotificationHtml(emailPayload),
    }).catch((err) => console.error("[Background Email Internal Error]:", err));

    // Customer Acknowledgement
    sendEmail({
      to: data.email,
      subject: `GSB Export — RFQ Received [${referenceNumber}]`,
      html: generateCustomerAcknowledgementHtml(emailPayload),
    }).catch((err) => console.error("[Background Email Customer Error]:", err));

    // 9. Successful Response
    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "Your Request for Quotation has been received successfully.",
    });
  } catch (error: any) {
    console.error("[API /api/enquiries Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

