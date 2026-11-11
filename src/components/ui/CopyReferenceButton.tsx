"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyReferenceButtonProps {
  referenceNumber: string;
}

export function CopyReferenceButton({ referenceNumber }: CopyReferenceButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(referenceNumber);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = referenceNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy reference number:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy reference number to clipboard"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-navy/5 hover:bg-navy/10 text-navy border border-silver/80 transition-colors focus:outline-none focus:ring-2 focus:ring-copper/40"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-graphite/70" />
          <span>Copy ID</span>
        </>
      )}
    </button>
  );
}

