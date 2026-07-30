import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Check if an admin already exists to prevent reseeding
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return NextResponse.json({ success: false, message: 'Admin already seeded' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('admin123', salt);

    const admin = await Admin.create({
      email: 'admin@edcomrade.com',
      passwordHash,
      name: 'EdComrade Super Admin',
    });

    return NextResponse.json({ success: true, message: 'Admin seeded', email: admin.email, password: 'admin123' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
