import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface SchoolDocument extends Document {
  schoolName: string;
  email?: string;
  phone?: string;
  city?: string;
  country?: string;
  website?: string;
  studentCount?: number;
  description?: string;
  logoUrl?: string;
  logoPublicId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SchoolSchema = new Schema<SchoolDocument>(
  {
    schoolName: { type: String, required: true, index: true },
    email: { type: String },
    phone: { type: String },
    city: { type: String },
    country: { type: String },
    website: { type: String },
    studentCount: { type: Number },
    description: { type: String },
    logoUrl: { type: String },
    logoPublicId: { type: String },
  },
  { timestamps: true }
);

export const School: Model<SchoolDocument> =
  (mongoose.models.School as Model<SchoolDocument>) ||
  mongoose.model<SchoolDocument>("School", SchoolSchema);


