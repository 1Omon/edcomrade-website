import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface ContactDocument extends Document {
  name: string;
  email: string;
  phone?: string;
  schoolName?: string;
  role: "proprietor" | "parent" | "student" | "partner" | "other";
  subject?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<ContactDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String },
    schoolName: { type: String },
    role: {
      type: String,
      required: true,
      enum: ["proprietor", "parent", "student", "partner", "other"],
    },
    subject: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact: Model<ContactDocument> =
  (mongoose.models.Contact as Model<ContactDocument>) ||
  mongoose.model<ContactDocument>("Contact", ContactSchema);
