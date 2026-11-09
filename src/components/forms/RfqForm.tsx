"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { PRODUCTS } from "@/content/products";

export function RfqForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preSelectedCategory = searchParams.get("category") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    companyWebsite: "",
    productCategory: preSelectedCategory || "Shell and Tube Heat Exchanger",
    quantity: "1",
    fluidType: "",
    inletTemperature: "",
    outletTemperature: "",
    operatingPressure: "",
    flowRate: "",
    material: "",
    deliveryDestination: "",
    technicalRequirements: "",
    message: "",
    honeypot: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (preSelectedCategory) {
      setFormData((prev) => ({
        ...prev,
        productCategory: preSelectedCategory,
      }));
    }
  }, [preSelectedCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files);
    // Max 5 files total
    if (files.length + newFiles.length > 5) {
      setFileError("You can upload a maximum of 5 technical documents.");
      return;
    }

    // Validate size (15MB per file)
    for (const f of newFiles) {
      if (f.size > 15 * 1024 * 1024) {
        setFileError(`File "${f.name}" exceeds the 15MB limit.`);
        return;
      }
    }

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const dataPayload = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        dataPayload.append(key, val);
      });

      files.forEach((file) => {
        dataPayload.append("files", file);
      });

      const res = await fetch("/api/enquiries", {
        method: "POST",
        body: dataPayload,
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.message || "Failed to submit RFQ. Please try again.");
      }

      // Redirect to Thank You page with reference number
      router.push(`/thank-you?ref=${encodeURIComponent(resData.referenceNumber || "")}&type=rfq`);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us via email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-silver/70 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
      {/* Honeypot for Anti-Spam */}
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
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Customer & Company Details */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
            Section 01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-navy">
            Client &amp; Commercial Information
          </h2>
          <p className="text-xs text-graphite/70 mt-1">
            Your corporate contact details for official proposal transmission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Company / Entity Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Gulf Petrochem LLC"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Contact Phone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +971 50 123 4567"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Country of Delivery / Operation <span className="text-copper">*</span>
            </label>
            <input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. United Arab Emirates, Saudi Arabia, Germany"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Company Website (Optional)
            </label>
            <input
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="e.g. https://www.company.com"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Equipment & Process Technical Parameters */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
            Section 02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-navy">
            Equipment &amp; Thermal Requirements
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-copper-dark mt-1 font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Unknown parameters can be left blank — our engineering team will assist you.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Product Category <span className="text-copper">*</span>
            </label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite bg-white"
            >
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.name}
                </option>
              ))}
              <option value="Custom Thermal System">Other Custom Thermal Package</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Required Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 1 unit, 2 units, battery of 4"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Process Fluids (Hot / Cold Media)
            </label>
            <input
              type="text"
              name="fluidType"
              value={formData.fluidType}
              onChange={handleChange}
              placeholder="e.g. Crude Oil / Cooling Water, Steam / Condensate"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Material Preference (if known)
            </label>
            <input
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder="e.g. Carbon Steel, SS 316L, Titanium, Duplex 2205"
              className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>

        {/* Operating Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
              Inlet Temp (°C / °F)
            </label>
            <input
              type="text"
              name="inletTemperature"
              value={formData.inletTemperature}
              onChange={handleChange}
              placeholder="e.g. 140°C"
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
              Outlet Temp (°C / °F)
            </label>
            <input
              type="text"
              name="outletTemperature"
              value={formData.outletTemperature}
              onChange={handleChange}
              placeholder="e.g. 45°C"
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
              Operating Pressure
            </label>
            <input
              type="text"
              name="operatingPressure"
              value={formData.operatingPressure}
              onChange={handleChange}
              placeholder="e.g. 16 bar(g)"
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1">
              Flow Rate (m³/h / kg/s)
            </label>
            <input
              type="text"
              name="flowRate"
              value={formData.flowRate}
              onChange={handleChange}
              placeholder="e.g. 120 m³/h"
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Delivery Destination (Port / Jobsite)
          </label>
          <input
            type="text"
            name="deliveryDestination"
            value={formData.deliveryDestination}
            onChange={handleChange}
            placeholder="e.g. Jebel Ali Port, UAE (CIF) / Dammam, Saudi Arabia"
            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Additional Technical Requirements &amp; Project Description
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail allowable pressure drop, fouling factor tolerances, corrosion allowances, design codes (ASME/TEMA), or delivery timeframe..."
            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-silver focus:outline-none focus:ring-2 focus:ring-steel text-graphite leading-relaxed"
          />
        </div>
      </div>

      {/* Section 3: Technical Document Uploads */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
            Section 03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-navy">
            Technical Drawing &amp; Specification Uploads
          </h2>
          <p className="text-xs text-graphite/70 mt-1">
            Attach process data sheets, General Arrangement drawings, P&amp;ID extracts, or project specifications. (PDF, DWG, DXF, Images, max 15MB each, up to 5 files).
          </p>
        </div>

        {fileError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{fileError}</span>
          </div>
        )}

        {/* Upload Dropzone */}
        <label className="border-2 border-dashed border-silver hover:border-steel/80 transition-colors rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer bg-offwhite/50 text-center block">
          <UploadCloud className="w-10 h-10 text-copper mb-2" />
          <span className="text-xs sm:text-sm font-bold text-navy">
            Click to Browse or Drag &amp; Drop Technical Files Here
          </span>
          <span className="text-xs text-graphite/60 mt-1">
            Accepted: PDF, DWG, DXF, DOCX, XLSX, PNG, JPG (Max 15MB per file)
          </span>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
          />
        </label>

        {/* Attached Files List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <span className="text-xs font-bold text-navy block">
              Attached Technical Files ({files.length}/5):
            </span>
            {files.map((file, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-silver/70 rounded-lg flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5 truncate pr-2">
                  <FileText className="w-4 h-4 text-steel shrink-0" />
                  <span className="font-medium text-navy truncate">{file.name}</span>
                  <span className="text-[11px] text-graphite/60 shrink-0">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-graphite/60 hover:text-red-600 p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 p-3.5 bg-offwhite rounded-lg border border-silver/50 text-[11px] text-graphite/80 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
          <span>
            <strong>Confidentiality Guaranteed:</strong> All uploaded engineering drawings and proprietary process parameters are stored in private object storage and accessed strictly for quotation calculation.
          </span>
        </div>
      </div>

      {/* Submission CTA */}
      <div className="pt-4 border-t border-silver/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-copper text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting RFQ Dossier...</span>
            </>
          ) : (
            <>
              <FileText className="w-4 h-4" />
              <span>Submit RFQ to Engineering Desk</span>
            </>
          )}
        </button>

        <span className="text-xs text-graphite/60 text-center sm:text-right">
          Estimated engineering response: 1–2 business days
        </span>
      </div>
    </form>
  );
}

