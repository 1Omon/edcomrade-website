import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const {
      schoolName,
      contactName,
      email,
      phone,
      city,
      country,
      studentCount,
      boarderCount,
      transportCount,
      selectedModules,
      isFiveYearLock,
      hasBundleDiscount,
      costPerTermGHS,
      annualCostGHS,
    } = body;

    if (!schoolName || !contactName || !email) {
      return NextResponse.json(
        { error: "School name, contact name, and email are required." },
        { status: 400 }
      );
    }

    const submission = await SchoolSubmission.create({
      schoolName,
      contactName,
      email,
      phone,
      city,
      country: country || "Ghana",
      studentCount: Number(studentCount) || 0,
      type: "deployment_request",
      status: "pending",
      deploymentDetails: {
        totalStudents: Number(studentCount) || 0,
        boarderCount: Number(boarderCount) || 0,
        transportCount: Number(transportCount) || 0,
        selectedModules: selectedModules || [],
        isFiveYearLock: Boolean(isFiveYearLock),
        hasBundleDiscount: Boolean(hasBundleDiscount),
        costPerTermGHS: Number(costPerTermGHS) || 0,
        annualCostGHS: Number(annualCostGHS) || 0,
      },
    });

    return NextResponse.json({ success: true, id: submission._id });
  } catch (error: any) {
    console.error("Error creating deployment request:", error);
    return NextResponse.json({ error: error.message || "Failed to submit request" }, { status: 500 });
  }
}
