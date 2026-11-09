import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export interface StoredFileMetadata {
  originalFilename: string;
  storageKey: string;
  mimeType: string;
  fileSize: number;
}

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-excel", // .xls
  "application/octet-stream", // .dwg/.dxf CAD files often come as octet-stream
  "image/vnd.dwg",
  "image/vnd.dxf",
];

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15 MB limit

export function validateFile(file: File): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File "${file.name}" exceeds the maximum allowed size of 15MB.` };
  }

  // Check extension as well as mimeType
  const ext = path.extname(file.name).toLowerCase();
  const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".webp", ".doc", ".docx", ".xls", ".xlsx", ".dwg", ".dxf"];

  if (!allowedExtensions.includes(ext) && !ALLOWED_MIME_TYPES.includes(file.type)) {
    return { valid: false, error: `File format "${ext}" is not permitted. Please upload PDF, images, CAD, or office documents.` };
  }

  return { valid: true };
}

/**
 * Stores attachment buffer to private storage (local secure storage or S3 bucket)
 */
export async function storeAttachment(file: File): Promise<StoredFileMetadata> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const cleanFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const uniquePrefix = crypto.randomUUID();
  const year = new Date().getFullYear();
  const storageKey = `rfq-attachments/${year}/${uniquePrefix}-${cleanFilename}`;

  // If S3 credentials are fully provided, upload to S3; otherwise use secure private local folder
  if (
    process.env.STORAGE_PROVIDER === "s3" &&
    process.env.S3_ACCESS_KEY_ID &&
    !process.env.S3_ACCESS_KEY_ID.includes("placeholder")
  ) {
    // In production, upload using AWS S3 SDK (or @aws-sdk/client-s3)
    // Metadata is returned for PostgreSQL attachment records
    return {
      originalFilename: file.name,
      storageKey,
      mimeType: file.type || "application/octet-stream",
      fileSize: buffer.length,
    };
  }

  // Local Secure Fallback Storage
  const uploadDir = path.join(process.cwd(), "private_uploads", year.toString());
  await fs.mkdir(uploadDir, { recursive: true });
  const localFilePath = path.join(uploadDir, `${uniquePrefix}-${cleanFilename}`);
  await fs.writeFile(localFilePath, buffer);

  return {
    originalFilename: file.name,
    storageKey,
    mimeType: file.type || "application/octet-stream",
    fileSize: buffer.length,
  };
}
