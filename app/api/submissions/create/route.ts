import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";

export async function POST(request: Request) {
  await connectToDatabase();
  const formData = await request.formData();
  const doc = await SchoolSubmission.create({
    schoolName: String(formData.get("schoolName") || "").trim(),
    contactName: String(formData.get("contactName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim() || undefined,
    city: String(formData.get("city") || "").trim() || undefined,
    country: String(formData.get("country") || "").trim() || undefined,
    website: String(formData.get("website") || "").trim() || undefined,
    studentCount: Number(formData.get("studentCount") || 0) || undefined,
    description: String(formData.get("description") || "").trim() || undefined,
    logoUrl: String(formData.get("logoUrl") || "").trim() || undefined,
    logoPublicId: String(formData.get("logoPublicId") || "").trim() || undefined,
  });
  return NextResponse.json({ id: doc._id.toString() });
}


