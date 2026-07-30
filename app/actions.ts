"use server";

import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";
import { revalidatePath } from "next/cache";
import { sendNotificationEmail } from "@/lib/email-service";

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
    type: (formData.get("type") as any) || "application",
    status: "pending",
  };

  if (!payload.schoolName || !payload.contactName || !payload.email) {
    throw new Error("schoolName, contactName and email are required");
  }

  const created = await SchoolSubmission.create(payload);
  
  // Send email notification
  await sendNotificationEmail("submission", payload);

  revalidatePath("/admin/submissions");
  return { id: (created as any)._id.toString() };
}

export async function submitContactAction(formData: FormData) {
  await connectToDatabase();

  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim() || undefined,
    schoolName: String(formData.get("schoolName") || "").trim() || undefined,
    role: String(formData.get("role") || "").trim(),
    subject: String(formData.get("subject") || "").trim() || undefined,
    message: String(formData.get("message") || "").trim(),
  };

  if (!payload.name || !payload.email || !payload.role || !payload.message) {
    throw new Error("Name, email, role, and message are required");
  }

  const { Contact } = await import("@/models/Contact");
  const created = await Contact.create(payload);

  // Send email notification
  await sendNotificationEmail("contact", payload);

  revalidatePath("/admin/contacts");
  return { id: (created as any)._id.toString() };
}
