import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { PioneerReservation } from "@/models/PioneerReservation";
import { paystack } from "@/lib/payments";

export async function POST(request: Request) {
  if (!paystack) return NextResponse.json({ error: 'Payments disabled' }, { status: 503 })
  await connectToDatabase();
  const { reservationId, email, schoolName } = await request.json();
  if (!reservationId || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const reservation = await PioneerReservation.findById(reservationId);
  if (!reservation) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const amountPesewas = 1000 * 100; // ₵1,000 in pesewas
  const init = await paystack.transaction.initialize({
    email,
    amount: amountPesewas,
    metadata: {
      reservation_id: reservationId,
      school_name: schoolName || reservation.schoolName,
      purpose: 'pioneer_100_deposit',
    },
    callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/pioneer-100/success`,
  }) as any;

  if (!init?.status) return NextResponse.json({ error: 'Failed to initialize payment' }, { status: 500 })

  reservation.status = 'pending_payment';
  await reservation.save();

  return NextResponse.json({ authorization_url: init.data.authorization_url, reference: init.data.reference })
}


