"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    honeypot: "", // Spam control
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bot spam

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
      setReferenceNumber(data.referenceNumber || "");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us directly via email.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-silver/70 rounded-xl p-8 text-center shadow-sm">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Thank You for Contacting GSB Export</h3>
        <p className="text-sm text-graphite/80 max-w-md mx-auto mb-4">
          Your general inquiry has been received. Our engineering and export support team will review your message and reply within 1 business day.
        </p>
        {referenceNumber && (
          <div className="inline-block bg-offwhite border border-silver/60 rounded px-4 py-2 text-xs font-mono font-bold text-navy mb-6">
            Reference No: <span className="text-copper">{referenceNumber}</span>
          </div>
        )}
        <div>
          <button
            onClick={() => setStatus("idle")}
            className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-silver/70 rounded-xl p-6 sm:p-8 shadow-sm">
      {/* Honeypot field hidden from real users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Full Name <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. PetroTech Engineering Ltd"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Business Email <span className="text-copper">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. j.doe@company.com"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +971 50 123 4567"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Country <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. United Arab Emirates, Saudi Arabia, Germany"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Subject <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Sourcing Inquiry / General Technical Query"
            className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
          Your Message <span className="text-copper">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your inquiry, process requirements, or question..."
          className="w-full text-xs px-3.5 py-2.5 rounded border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-copper text-xs font-bold uppercase tracking-wider px-7 py-3 rounded shadow hover:shadow-md transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Contact Message</span>
          </>
        )}
      </button>
    </form>
  );
}

