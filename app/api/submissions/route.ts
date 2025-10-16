import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim();
  const filter: any = {};
  if (q) {
    filter.$or = [
      { schoolName: { $regex: q, $options: 'i' } },
      { contactName: { $regex: q, $options: 'i' } },
      { email: { $regex: q, $options: 'i' } },
      { city: { $regex: q, $options: 'i' } },
      { country: { $regex: q, $options: 'i' } },
    ];
  }
  const submissions = await SchoolSubmission.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ submissions });
}


