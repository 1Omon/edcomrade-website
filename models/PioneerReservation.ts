import mongoose, { Schema, type Document, type Model } from "mongoose";

export type PioneerStatus = "initiated" | "pending_payment" | "paid" | "onboarded" | "cancelled" | "refunded";

export interface PioneerReservationDocument extends Document {
  schoolName: string;
  schoolType: string;
  region: string;
  city: string;
  contactName: string;
  contactRole: string;
  phone: string;
  email: string;
  hasWebsite: "modern" | "outdated" | "none";
  preferredDates?: string[];
  hearAbout?: string;
  marketingOptIn?: boolean;
  consentAccepted: boolean;
  status: PioneerStatus;
  paystackRef?: string;
  paymentMethod?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PioneerReservationSchema = new Schema<PioneerReservationDocument>(
  {
    schoolName: { type: String, required: true },
    schoolType: { type: String, required: true },
    region: { type: String, required: true },
    city: { type: String, required: true },
    contactName: { type: String, required: true },
    contactRole: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    hasWebsite: { type: String, enum: ["modern", "outdated", "none"], required: true },
    preferredDates: [{ type: String }],
    hearAbout: { type: String },
    marketingOptIn: { type: Boolean, default: false },
    consentAccepted: { type: Boolean, required: true },
    status: { type: String, enum: ["initiated", "pending_payment", "paid", "onboarded", "cancelled", "refunded"], default: "initiated" },
    paystackRef: { type: String },
    paymentMethod: { type: String },
  },
  { timestamps: true }
);

export const PioneerReservation: Model<PioneerReservationDocument> =
  (mongoose.models.PioneerReservation as Model<PioneerReservationDocument>) ||
  mongoose.model<PioneerReservationDocument>("PioneerReservation", PioneerReservationSchema);


