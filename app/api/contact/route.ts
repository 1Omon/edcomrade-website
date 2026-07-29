import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/Contact";

export async function GET() {
  await connectToDatabase();
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ contacts });
}

export async function POST(request: Request) {
  await connectToDatabase();
  let data: any = {};
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    data = await request.json();
  } else {
    const formData = await request.formData();
    data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      schoolName: formData.get("schoolName"),
      role: formData.get("role"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
  }

  // Validate fields
  if (!data.name || !data.email || !data.role || !data.message) {
    return NextResponse.json(
      { error: "Name, email, role, and message are required." },
      { status: 400 }
    );
  }

  const created = await Contact.create({
    name: String(data.name).trim(),
    email: String(data.email).trim(),
    phone: data.phone ? String(data.phone).trim() : undefined,
    schoolName: data.schoolName ? String(data.schoolName).trim() : undefined,
    role: String(data.role).trim(),
    subject: data.subject ? String(data.subject).trim() : undefined,
    message: String(data.message).trim(),
  });

  return NextResponse.json({ id: (created._id as any).toString() });
}
