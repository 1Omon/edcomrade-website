import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { PioneerReservation } from "@/models/PioneerReservation";

// NOTE: In production, verify Paystack signature via x-paystack-signature
export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const event = payload?.event;

  if (event === 'charge.success') {
    const reference = payload?.data?.reference as string | undefined;
    const metadata = payload?.data?.metadata as any;
    const reservationId = metadata?.reservation_id as string | undefined;
    if (reservationId) {
      await PioneerReservation.findByIdAndUpdate(reservationId, { status: 'paid', paystackRef: reference, paymentMethod: 'paystack' });
    }
  }

  return NextResponse.json({ ok: true })
}


