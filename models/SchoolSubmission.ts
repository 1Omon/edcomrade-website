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
  type: "application" | "inquiry" | "partnership" | "pioneer";
  status: "pending" | "verified" | "archived" | "onboarding";
  metadata?: Map<string, any>;
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
    type: {
      type: String,
      enum: ["application", "inquiry", "partnership", "pioneer"],
      default: "application"
    },
    status: {
      type: String,
      enum: ["pending", "verified", "archived", "onboarding"],
      default: "pending"
    },
    metadata: { type: Map, of: Schema.Types.Mixed },
  },
  { timestamps: true }
);

export const SchoolSubmission: Model<SchoolSubmissionDocument> =
  (mongoose.models.SchoolSubmission as Model<SchoolSubmissionDocument>) ||
  mongoose.model<SchoolSubmissionDocument>("SchoolSubmission", SchoolSubmissionSchema);


