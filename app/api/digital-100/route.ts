import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { PioneerReservation } from "@/models/PioneerReservation";

export async function GET() {
  await connectToDatabase();
  const total = await PioneerReservation.countDocuments({});
  return NextResponse.json({ total });
}

export async function POST(request: Request) {
  await connectToDatabase();
  const formData = await request.formData();
  const preferredDates = (formData.getAll('preferredDates') as string[])?.filter(Boolean);
  const created = await PioneerReservation.create({
    schoolName: String(formData.get('schoolName') || '').trim(),
    schoolType: String(formData.get('schoolType') || '').trim(),
    region: String(formData.get('region') || '').trim(),
    city: String(formData.get('city') || '').trim(),
    contactName: String(formData.get('contactName') || '').trim(),
    contactRole: String(formData.get('contactRole') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    hasWebsite: String(formData.get('hasWebsite') || 'none').trim(),
    preferredDates,
    hearAbout: String(formData.get('hearAbout') || '').trim() || undefined,
    marketingOptIn: String(formData.get('marketingOptIn') || '') === 'on',
    consentAccepted: String(formData.get('consentAccepted') || '') === 'on',
    status: 'pending_payment',
  });
  return NextResponse.json({ id: created._id.toString() });
}


