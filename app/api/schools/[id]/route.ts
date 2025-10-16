import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { School } from "@/models/School";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const school = await School.findById(params.id).lean();
  if (!school) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ school });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const formData = await request.formData();
  const update: any = {
    schoolName: String(formData.get("schoolName") || "").trim(),
    email: String(formData.get("email") || "").trim() || undefined,
    phone: String(formData.get("phone") || "").trim() || undefined,
    city: String(formData.get("city") || "").trim() || undefined,
    country: String(formData.get("country") || "").trim() || undefined,
    website: String(formData.get("website") || "").trim() || undefined,
    studentCount: Number(formData.get("studentCount") || 0) || undefined,
    description: String(formData.get("description") || "").trim() || undefined,
    logoUrl: String(formData.get("logoUrl") || "").trim() || undefined,
    logoPublicId: String(formData.get("logoPublicId") || "").trim() || undefined,
  };
  const saved = await School.findByIdAndUpdate(params.id, update, { new: true });
  return NextResponse.json({ id: saved?._id.toString() });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  await School.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}


