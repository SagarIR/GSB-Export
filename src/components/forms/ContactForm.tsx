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
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Thank You for Contacting GSB Export</h3>
        <p className="text-base text-slate-700 max-w-md mx-auto mb-5 leading-relaxed">
          Your general inquiry has been received. Our engineering and export support team will review your message and reply within 1 business day.
        </p>
        {referenceNumber && (
          <div className="inline-block bg-offwhite border border-silver/60 rounded-lg px-4 py-2.5 text-sm font-mono font-bold text-navy mb-6">
            Reference No: <span className="text-[#C2410C]">{referenceNumber}</span>
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn-navy text-sm font-semibold px-6 py-2.5 rounded-full"
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
        <div role="alert" className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name <span className="text-[#C2410C]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className="form-label">
            Company Name
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. PetroTech Engineering Ltd"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-email" className="form-label">
            Business Email <span className="text-[#C2410C]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. j.doe@company.com"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +971 50 123 4567"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-country" className="form-label">
            Country <span className="text-[#C2410C]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-country"
            type="text"
            name="country"
            required
            aria-required="true"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. United Arab Emirates, Saudi Arabia"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="form-label">
            Subject <span className="text-[#C2410C]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            required
            aria-required="true"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Sourcing Inquiry / General Technical Query"
            className="form-input"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className="form-label">
          Your Message <span className="text-[#C2410C]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your inquiry, process requirements, or question..."
          className="form-input leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-copper text-sm sm:text-base font-bold px-7 py-3 rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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

