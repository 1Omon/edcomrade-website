import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface SchoolSubmissionDocument extends Document {
  schoolName: string;
  contactName: string;
  email: string;
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

const SchoolSubmissionSchema = new Schema<SchoolSubmissionDocument>(
  {
    schoolName: { type: String, required: true },
    contactName: { type: String, required: true },
    email: { type: String, required: true, index: true },
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

export const SchoolSubmission: Model<SchoolSubmissionDocument> =
  (mongoose.models.SchoolSubmission as Model<SchoolSubmissionDocument>) ||
  mongoose.model<SchoolSubmissionDocument>("SchoolSubmission", SchoolSubmissionSchema);


