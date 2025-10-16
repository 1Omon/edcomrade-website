"use server";

import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";
import { revalidatePath } from "next/cache";

export async function submitSchoolAction(formData: FormData) {
  await connectToDatabase();

  const payload = {
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
  };

  if (!payload.schoolName || !payload.contactName || !payload.email) {
    throw new Error("schoolName, contactName and email are required");
  }

  const created = await SchoolSubmission.create(payload);
  revalidatePath("/admin/submissions");
  return { id: created._id.toString() };
}


