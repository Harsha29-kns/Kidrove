import mongoose, { Document, Schema } from "mongoose";
import { z } from "zod";

// Zod Schema for validation
export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

// Mongoose Interface
export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

// Mongoose Schema
const EnquirySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export const Enquiry = mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
