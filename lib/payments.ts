import {Paystack} from "paystack-sdk";

const { PAYSTACK_SECRET_KEY } = process.env;

if (!PAYSTACK_SECRET_KEY) {
  console.warn("PAYSTACK_SECRET_KEY is not set. Payments are disabled.");
}

export const paystack = PAYSTACK_SECRET_KEY ? new Paystack(PAYSTACK_SECRET_KEY) : null;


