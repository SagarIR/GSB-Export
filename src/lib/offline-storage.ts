import fs from "fs";
import path from "path";

/**
 * Resilient Fallback Storage for Offline / Pending Database Deployments.
 * Ensures that during local testing, staging previews, or database maintenance,
 * no customer RFQ or contact message is ever lost.
 */
export async function persistOfflineSubmission(
  type: "RFQ" | "CONTACT",
  referenceNumber: string,
  payload: Record<string, any>
): Promise<void> {
  try {
    const record = {
      referenceNumber,
      type,
      submittedAt: new Date().toISOString(),
      payload,
    };

    // Attempt to write to private_uploads or fallback to system tmp
    const primaryDir = path.join(process.cwd(), "private_uploads");
    const tmpDir = process.env.TMPDIR || process.env.TEMP || "/tmp";
    
    let targetDir = primaryDir;
    try {
      if (!fs.existsSync(primaryDir)) {
        fs.mkdirSync(primaryDir, { recursive: true });
      }
    } catch {
      targetDir = tmpDir;
    }

    const logFilePath = path.join(targetDir, "offline_submissions.jsonl");
    const logLine = JSON.stringify(record) + "\n";
    fs.appendFileSync(logFilePath, logLine, "utf8");
    
    console.log(`[Offline Storage] Safely persisted ${type} enquiry ${referenceNumber} to ${logFilePath}`);
  } catch (err) {
    console.error("[Offline Storage Error] Failed to append offline submission:", err);
  }
}
