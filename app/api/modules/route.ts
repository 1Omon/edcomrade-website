import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import PioneerModule from '@/models/PioneerModule';

export async function GET() {
  try {
    await connectToDatabase();
    const modules = await PioneerModule.find().sort({ order: 1 });
    return NextResponse.json({ success: true, count: modules.length, data: modules });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const module = await PioneerModule.create(body);
    return NextResponse.json({ success: true, data: module }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
