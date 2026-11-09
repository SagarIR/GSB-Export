import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatReferenceNumber(prefix: string = "GSB-RFQ", year: number = new Date().getFullYear(), sequence: number): string {
  return `${prefix}-${year}-${sequence.toString().padStart(5, "0")}`;
}
