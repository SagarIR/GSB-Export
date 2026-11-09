import { NextRequest, NextResponse } from "next/server";
import { prisma, isDatabaseAvailable } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const rateCheck = checkRateLimit(ip, 5, 10 * 60 * 1000);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many submission attempts. Please wait a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMsg = validationResult.error.errors[0]?.message || "Invalid input data";
      return NextResponse.json({ success: false, message: errorMsg }, { status: 400 });
    }

    const data = validationResult.data;

    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    const year = new Date().getFullYear();
    const randomSeq = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `GSB-GEN-${year}-${randomSeq}`;

    const dbActive = await isDatabaseAvailable();
    if (dbActive) {
      await prisma.enquiry.create({
        data: {
          referenceNumber,
          enquiryType: "GENERAL",
          status: "NEW",
          name: data.name,
          company: data.company || null,
          email: data.email,
          phone: data.phone || null,
          country: data.country,
          subject: data.subject,
          message: data.message,
        },
      });
    } else {
      console.log(`[Database Notice - Offline/Pending Mode]: General Contact ${referenceNumber} logged safely for ${data.name} (${data.email})`);
    }

    const businessEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || "enquiry@gsbexport.com";
    sendEmail({
      to: businessEmail,
      subject: `[General Contact: ${referenceNumber}] ${data.subject} - ${data.name} (${data.country})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #D8DEE5; border-radius: 6px;">
          <h3 style="color: #10263D;">GSB Export — General Website Inquiry</h3>
          <p><strong>Reference:</strong> ${referenceNumber}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 12px; border-radius: 4px;">${data.message}</p>
        </div>
      `,
    }).catch((err) => console.error("[Contact Email Error]:", err));

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "Your message has been sent successfully. Thank you for contacting GSB Export.",
    });
  } catch (error: any) {
    console.error("[API /api/contact Exception]:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please email us directly." },
      { status: 500 }
    );
  }
}

