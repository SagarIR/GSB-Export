import nodemailer from "nodemailer";
import { COMPANY_INFO } from "@/content/company";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

function getTransporter() {
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    !process.env.SMTP_HOST.includes("example.com")
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
}

export async function sendEmail({ to, subject, html }: EmailPayload): Promise<{ success: boolean; simulated?: boolean }> {
  const transporter = getTransporter();

  if (!transporter) {
    console.log(`[Email Service - Pending Configuration] Email simulated to: ${to} | Subject: "${subject}"`);
    return { success: true, simulated: true };
  }

  try {
    const fromAddress = process.env.SMTP_FROM || `GSB Export <enquiry@gsbexport.com>`;
    await transporter.sendMail({
      from: fromAddress,
      to,
      subject,
      html,
    });
    return { success: true, simulated: false };
  } catch (error) {
    console.error("[Email Delivery Error]:", error);
    return { success: false };
  }
}

/**
 * Generates branded HTML template for Internal Business RFQ Notification
 */
export function generateInternalRfqNotificationHtml(data: any): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #D8DEE5; border-radius: 8px; overflow: hidden;">
      <div style="background: #10263D; padding: 24px; text-align: left; border-bottom: 4px solid #D88B35;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">GSB Export — New Technical RFQ Submission</h2>
        <p style="color: #D88B35; margin: 6px 0 0 0; font-size: 13px; font-weight: bold;">Reference: ${data.referenceNumber}</p>
      </div>

      <div style="padding: 24px;">
        <h3 style="color: #10263D; border-bottom: 2px solid #F3F5F7; padding-bottom: 8px; margin-top: 0;">1. Client & Commercial Information</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 6px 0; color: #576575; width: 35%;">Contact Name:</td><td style="font-weight: bold; color: #10263D;">${data.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Company Name:</td><td style="font-weight: bold; color: #10263D;">${data.company || "Not Provided"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Corporate Email:</td><td style="color: #234D70;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Phone Number:</td><td style="color: #10263D;">${data.phone || "Not Provided"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Country of Operation:</td><td style="font-weight: bold; color: #10263D;">${data.country}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Company Website:</td><td style="color: #234D70;">${data.companyWebsite || "None"}</td></tr>
        </table>

        <h3 style="color: #10263D; border-bottom: 2px solid #F3F5F7; padding-bottom: 8px;">2. Heat Exchanger Technical Parameters</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 6px 0; color: #576575; width: 35%;">Equipment Category:</td><td style="font-weight: bold; color: #D88B35;">${data.productCategory}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Required Quantity:</td><td>${data.quantity || "1"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Process Fluid Type:</td><td>${data.fluidType || "Pending Evaluation"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Inlet Temperature:</td><td>${data.inletTemperature || "To be confirmed"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Outlet Temperature:</td><td>${data.outletTemperature || "To be confirmed"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Operating Pressure:</td><td>${data.operatingPressure || "To be confirmed"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Flow Rate:</td><td>${data.flowRate || "To be confirmed"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Material Preference:</td><td>${data.material || "Standard per process"}</td></tr>
          <tr><td style="padding: 6px 0; color: #576575;">Delivery Destination:</td><td>${data.deliveryDestination || data.country}</td></tr>
        </table>

        <h3 style="color: #10263D; border-bottom: 2px solid #F3F5F7; padding-bottom: 8px;">3. Project Message & Notes</h3>
        <p style="font-size: 13px; color: #202A35; background: #F3F5F7; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${data.message || "No additional comments provided."}</p>

        <p style="font-size: 12px; color: #576575; margin-top: 24px; border-top: 1px solid #D8DEE5; padding-top: 12px;">
          Submitted via GSB Export Website Portal • Timestamp: ${new Date().toUTCString()}
        </p>
      </div>
    </div>
  `;
}

/**
 * Generates branded HTML template for Customer RFQ Acknowledgement
 */
export function generateCustomerAcknowledgementHtml(data: any): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #D8DEE5; border-radius: 8px; overflow: hidden;">
      <div style="background: #10263D; padding: 24px; text-align: left; border-bottom: 4px solid #D88B35;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">GSB Export — RFQ Acknowledgement</h2>
        <p style="color: #D88B35; margin: 6px 0 0 0; font-size: 13px;">Reference Number: <strong>${data.referenceNumber}</strong></p>
      </div>

      <div style="padding: 24px; color: #202A35; font-size: 14px; line-height: 1.6;">
        <p>Dear <strong>${data.name}</strong>,</p>
        <p>
          Thank you for requesting an industrial heat exchanger quotation from <strong>GSB Export</strong>. We have registered your inquiry under reference number <strong>${data.referenceNumber}</strong>.
        </p>

        <div style="background: #F3F5F7; border-left: 4px solid #234D70; padding: 16px; border-radius: 4px; margin: 20px 0;">
          <h4 style="margin: 0 0 8px 0; color: #10263D; font-size: 14px;">Next Engineering Steps:</h4>
          <ol style="margin: 0; padding-left: 18px; font-size: 13px; color: #576575;">
            <li style="margin-bottom: 6px;"><strong>Thermodynamic Review:</strong> Our thermal team is verifying duty parameters, temperatures, and fluid properties.</li>
            <li style="margin-bottom: 6px;"><strong>Fabrication Bay Reconciliation:</strong> Alignment with certified partner shops for lead times and metallurgy availability.</li>
            <li><strong>Formal Proposal:</strong> We will deliver an itemized commercial and technical proposal within 1–2 business days.</li>
          </ol>
        </div>

        <p style="font-size: 13px; color: #576575;">
          If you have additional technical drawings, process flow diagrams (PFD), or project specifications to append, simply reply to this email keeping your reference number intact.
        </p>

        <p style="font-size: 13px; margin-top: 24px;">
          Best regards,<br />
          <strong>Engineering &amp; Export Estimation Desk</strong><br />
          GSB Export — Vadodara, Gujarat, India<br />
          Email: <a href="mailto:${COMPANY_INFO.contact.email}" style="color: #234D70;">${COMPANY_INFO.contact.email}</a>
        </p>
      </div>
    </div>
  `;
}

