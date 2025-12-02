import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { reservationId, email, schoolName } = await request.json();
  if (!reservationId || !email)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const amountPesewas = 1500 * 100; // ₵1,500 in pesewas

  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      amount: amountPesewas,
      metadata: {
        reservation_id: reservationId,
        school_name: schoolName,
        purpose: "pioneer_100_deposit",
      },
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/campaigns/digital-100/success`,
    }),
  });

  const data = await response.json();

  if (!data.status)
    return NextResponse.json({ error: "Failed to initialize payment" }, { status: 500 });

  return NextResponse.json({
    authorization_url: data.data.authorization_url,
    reference: data.data.reference,
  });
}
