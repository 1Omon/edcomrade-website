import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  type: 'blog' | 'case-study' | 'success-story';
  author: string;
  isPublished: boolean;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['blog', 'case-study', 'success-story'], required: true },
    author: { type: String, default: 'Admin' },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
