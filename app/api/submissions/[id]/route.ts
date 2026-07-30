import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { SchoolSubmission } from "@/models/SchoolSubmission";

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const { status } = await request.json();

        if (!status) {
            return NextResponse.json({ error: "Status is required" }, { status: 400 });
        }

        const updated = await SchoolSubmission.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ error: "Submission not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to update submission" }, { status: 500 });
    }
}
