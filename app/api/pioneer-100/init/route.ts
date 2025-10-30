// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import { PioneerReservation } from "@/models/PioneerReservation";
// import { paystack } from "@/lib/payments";

// export async function POST(request: Request) {
//   if (!paystack)
//     return NextResponse.json({ error: "Payments disabled" }, { status: 503 });
//   await connectToDatabase();
//   const { reservationId, email, schoolName } = await request.json();
//   if (!reservationId || !email)
//     return NextResponse.json({ error: "Missing fields" }, { status: 400 });

//   const reservation = await PioneerReservation.findById(reservationId);
//   if (!reservation)
//     return NextResponse.json({ error: "Not found" }, { status: 404 });

//   const amountPesewas: any = 1000 * 100; // ₵1,000 in pesewas
//   const init:any = await paystack.transaction.initialize({
//     email,
//     amount: amountPesewas,
//     metadata: JSON.stringify({
//       reservation_id: reservationId,
//       school_name: schoolName || reservation.schoolName,
//       purpose: "pioneer_100_deposit",
//     }) as any,
//     callback_url: `${
//       process.env.NEXT_PUBLIC_BASE_URL || ""
//     }/pioneer-100/success`,
//   });

//   if (!init?.status)
//     return NextResponse.json(
//       { error: "Failed to initialize payment" },
//       { status: 500 }
//     );

//   reservation.status = "pending_payment";
//   await reservation.save();

//   return NextResponse.json({
//     authorization_url: init?.data.authorization_url,
//     reference: init.data.reference,
//   });
// }


import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { reservationId, email, schoolName } = await request.json();
  if (!reservationId || !email)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const amountPesewas = 1000 * 100; // ₵1,000 in pesewas

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
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/pioneer-100/success`,
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
