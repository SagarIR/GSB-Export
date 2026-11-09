import { z } from "zod";

export const rfqSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters").max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Please provide a valid corporate email address"),
  phone: z.string().max(30).optional().or(z.literal("")),
  country: z.string().min(2, "Country is required").max(100),
  companyWebsite: z.string().max(150).optional().or(z.literal("")),
  productCategory: z.string().min(2, "Please select an equipment category"),
  quantity: z.string().max(50).optional().or(z.literal("")),
  fluidType: z.string().max(100).optional().or(z.literal("")),
  inletTemperature: z.string().max(50).optional().or(z.literal("")),
  outletTemperature: z.string().max(50).optional().or(z.literal("")),
  operatingPressure: z.string().max(50).optional().or(z.literal("")),
  flowRate: z.string().max(50).optional().or(z.literal("")),
  material: z.string().max(100).optional().or(z.literal("")),
  deliveryDestination: z.string().max(100).optional().or(z.literal("")),
  technicalRequirements: z.string().max(2000).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters").max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().max(30).optional().or(z.literal("")),
  country: z.string().min(2, "Country is required").max(100),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type RFQFormData = z.infer<typeof rfqSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;

