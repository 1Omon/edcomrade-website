import mongoose, { Schema, Document } from 'mongoose';

export interface IPioneerModule extends Document {
  name: string;
  description: string;
  type: 'Required' | 'Optional' | 'Free' | 'Best Value';
  pricing: {
    under100: string;
    tier100_299: string;
    tier300_499: string;
    tier500Plus: string;
  };
  order: number;
}

const PioneerModuleSchema = new Schema<IPioneerModule>(
  {
    name: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: ['Required', 'Optional', 'Free', 'Best Value'],
      default: 'Optional',
    },
    pricing: {
      under100: { type: String, default: '' },
      tier100_299: { type: String, default: '' },
      tier300_499: { type: String, default: '' },
      tier500Plus: { type: String, default: '' },
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.PioneerModule ||
  mongoose.model<IPioneerModule>('PioneerModule', PioneerModuleSchema);
