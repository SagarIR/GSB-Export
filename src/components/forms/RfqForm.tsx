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

function normalizeCategoryParam(rawCategory: string): string {
  const lower = rawCategory.trim().toLowerCase();
  if (!lower) return "Shell & Tube Heat Exchanger";
  const matched = PRODUCTS.find(
    (p) =>
      p.name.toLowerCase() === lower ||
      p.slug.toLowerCase() === lower ||
      p.name.toLowerCase().replace(/&/g, "and").replace(/-/g, " ") ===
        lower.replace(/&/g, "and").replace(/-/g, " ")
  );
  return matched ? matched.name : rawCategory;
}

export function RfqForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || "";
  const preSelectedCategory = normalizeCategoryParam(rawCategory);
  const preFluid = searchParams.get("fluid") || "";
  const preTemp = searchParams.get("temp") || "";
  const prePressure = searchParams.get("pressure") || "";
  const preCountry = searchParams.get("country") || "";
  const preIndustry = searchParams.get("industry") || "";
  const preApplication = searchParams.get("application") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: preCountry,
    companyWebsite: "",
    productCategory: preSelectedCategory,
    quantity: "1",
    fluidType: preFluid,
    inletTemperature: preTemp ? `${preTemp} °C` : "",
    outletTemperature: "",
    operatingPressure: prePressure ? `${prePressure} bar` : "",
    flowRate: "",
    material: "",
    deliveryDestination: preCountry,
    technicalRequirements: preIndustry
      ? `Industry Sector: ${preIndustry}`
      : preApplication
      ? `Reference Application: ${preApplication}`
      : "",
    message: "",
    honeypot: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (rawCategory) {
      setFormData((prev) => ({
        ...prev,
        productCategory: normalizeCategoryParam(rawCategory),
      }));
    }
  }, [rawCategory]);

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
        <div role="alert" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Customer & Company Details */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-1">
            Section 01
          </span>
          <h2 className="text-h3 font-bold text-navy">
            Client &amp; Commercial Information
          </h2>
          <p className="text-sm text-slate-600 mt-1 mb-0">
            Your corporate contact details for official proposal transmission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="rfq-name" className="form-label">
              Full Name <span className="text-[#C2410C]" aria-hidden="true">*</span>
            </label>
            <input
              id="rfq-name"
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
            <label htmlFor="rfq-company" className="form-label">
              Company / Entity Name
            </label>
            <input
              id="rfq-company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Gulf Petrochem LLC"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="rfq-email" className="form-label">
              Business Email <span className="text-[#C2410C]" aria-hidden="true">*</span>
            </label>
            <input
              id="rfq-email"
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
            <label htmlFor="rfq-phone" className="form-label">
              Contact Phone / WhatsApp
            </label>
            <input
              id="rfq-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +971 50 123 4567"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="rfq-country" className="form-label">
              Country of Delivery / Operation <span className="text-[#C2410C]" aria-hidden="true">*</span>
            </label>
            <input
              id="rfq-country"
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
            <label htmlFor="rfq-website" className="form-label">
              Company Website (Optional)
            </label>
            <input
              id="rfq-website"
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="e.g. https://www.company.com"
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Equipment & Process Technical Parameters */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-1">
            Section 02
          </span>
          <h2 className="text-h3 font-bold text-navy">
            Equipment &amp; Thermal Requirements
          </h2>
          <div className="flex items-center gap-2 text-sm text-[#C2410C] mt-1.5 font-medium">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Unknown parameters can be left blank — our engineering team will assist you.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="rfq-category" className="form-label">
              Product Category <span className="text-[#C2410C]" aria-hidden="true">*</span>
            </label>
            <select
              id="rfq-category"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="form-input"
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
            <label htmlFor="rfq-quantity" className="form-label">
              Required Quantity
            </label>
            <input
              id="rfq-quantity"
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 1 unit, 2 units, battery of 4"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="rfq-fluid" className="form-label">
              Process Fluids (Hot / Cold Media)
            </label>
            <input
              id="rfq-fluid"
              type="text"
              name="fluidType"
              value={formData.fluidType}
              onChange={handleChange}
              placeholder="e.g. Crude Oil / Cooling Water, Steam"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="rfq-material" className="form-label">
              Material Preference (if known)
            </label>
            <input
              id="rfq-material"
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder="e.g. Carbon Steel, SS 316L, Titanium"
              className="form-input"
            />
          </div>
        </div>

        {/* Operating Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <div>
            <label htmlFor="rfq-inlet-temp" className="form-label">
              Inlet Temp (°C / °F)
            </label>
            <input
              id="rfq-inlet-temp"
              type="text"
              name="inletTemperature"
              value={formData.inletTemperature}
              onChange={handleChange}
              placeholder="e.g. 140°C"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="rfq-outlet-temp" className="form-label">
              Outlet Temp (°C / °F)
            </label>
            <input
              id="rfq-outlet-temp"
              type="text"
              name="outletTemperature"
              value={formData.outletTemperature}
              onChange={handleChange}
              placeholder="e.g. 45°C"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="rfq-pressure" className="form-label">
              Operating Pressure
            </label>
            <input
              id="rfq-pressure"
              type="text"
              name="operatingPressure"
              value={formData.operatingPressure}
              onChange={handleChange}
              placeholder="e.g. 16 bar(g)"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="rfq-flow" className="form-label">
              Flow Rate (m³/h / kg/s)
            </label>
            <input
              id="rfq-flow"
              type="text"
              name="flowRate"
              value={formData.flowRate}
              onChange={handleChange}
              placeholder="e.g. 120 m³/h"
              className="form-input"
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="rfq-destination" className="form-label">
            Delivery Destination (Port / Jobsite)
          </label>
          <input
            id="rfq-destination"
            type="text"
            name="deliveryDestination"
            value={formData.deliveryDestination}
            onChange={handleChange}
            placeholder="e.g. Jebel Ali Port, UAE (CIF) / Dammam, Saudi Arabia"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="rfq-message" className="form-label">
            Additional Technical Requirements &amp; Project Description
          </label>
          <textarea
            id="rfq-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail allowable pressure drop, fouling factor tolerances, corrosion allowances, design codes (ASME/TEMA), or delivery timeframe..."
            className="form-input leading-relaxed"
          />
        </div>
      </div>

      {/* Section 3: Technical Document Uploads */}
      <div>
        <div className="border-b border-silver/50 pb-3 mb-6">
          <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-1">
            Section 03
          </span>
          <h2 className="text-h3 font-bold text-navy">
            Technical Drawing &amp; Specification Uploads
          </h2>
          <p className="text-sm text-slate-600 mt-1 mb-0">
            Attach process data sheets, General Arrangement drawings, P&amp;ID extracts, or project specifications. (PDF, DWG, DXF, Images, max 15MB each, up to 5 files).
          </p>
        </div>

        {fileError && (
          <div role="alert" className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{fileError}</span>
          </div>
        )}

        {/* Upload Dropzone */}
        <label htmlFor="rfq-files" className="border-2 border-dashed border-silver hover:border-[#0F4C81] transition-colors rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer bg-offwhite/50 text-center block">
          <UploadCloud className="w-10 h-10 text-[#F36C21] mb-2" />
          <span className="text-sm sm:text-base font-bold text-navy">
            Click to Browse or Drag &amp; Drop Technical Files Here
          </span>
          <span className="text-xs sm:text-sm text-slate-600 mt-1">
            Accepted: PDF, DWG, DXF, DOCX, XLSX, PNG, JPG (Max 15MB per file)
          </span>
          <input
            id="rfq-files"
            type="file"
            multiple
            onChange={handleFileChange}
            className="sr-only"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
          />
        </label>

        {/* Attached Files List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <span className="text-sm font-bold text-navy block">
              Attached Technical Files ({files.length}/5):
            </span>
            {files.map((file, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-silver/70 rounded-lg flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2.5 truncate pr-2">
                  <FileText className="w-4 h-4 text-steel shrink-0" />
                  <span className="font-medium text-navy truncate">{file.name}</span>
                  <span className="text-xs text-slate-600 shrink-0">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => removeFile(idx)}
                  className="text-slate-600 hover:text-red-700 p-1.5 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 p-4 bg-offwhite rounded-lg border border-silver/50 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
          <span>
            <strong className="text-navy">Confidentiality Guaranteed:</strong> All uploaded engineering drawings and proprietary process parameters are stored in private object storage and accessed strictly for quotation calculation.
          </span>
        </div>
      </div>

      {/* Submission CTA */}
      <div className="pt-4 border-t border-silver/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-copper text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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

        <span className="text-xs sm:text-sm text-slate-600 text-center sm:text-right">
          Estimated engineering response: 1–2 business days
        </span>
      </div>
    </form>
  );
}

