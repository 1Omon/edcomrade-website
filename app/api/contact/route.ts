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
  const formData = await request.formData();
  const created = await Contact.create({
    firstName: String(formData.get('firstName') || '').trim(),
    lastName: String(formData.get('lastName') || '').trim() || undefined,
    email: String(formData.get('email') || '').trim(),
    school: String(formData.get('school') || '').trim() || undefined,
    message: String(formData.get('message') || '').trim() || undefined,
  })
  return NextResponse.json({ id: created._id.toString() })
}


