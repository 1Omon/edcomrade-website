import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface ContactDocument extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  school?: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<ContactDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, index: true },
    school: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export const Contact: Model<ContactDocument> =
  (mongoose.models.Contact as Model<ContactDocument>) ||
  mongoose.model<ContactDocument>("Contact", ContactSchema);


