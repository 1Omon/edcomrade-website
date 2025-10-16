import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { School } from "@/models/School";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim();
  const filter: any = {};
  if (q) filter.schoolName = { $regex: q, $options: 'i' };
  const schools = await School.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ schools });
}

export async function POST(request: Request) {
  await connectToDatabase();
  const formData = await request.formData();
  const created = await School.create({
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
  });
  return NextResponse.json({ id: created._id.toString() });
}


