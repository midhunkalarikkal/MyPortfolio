import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.OFFICIAL_EMAIL,
        pass: process.env.OFFICIALEMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: process.env.OFFICIAL_EMAIL,
      from: process.env.OFFICIAL_EMAIL,
      subject: 'New Message from Connect Form',
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully', success: true });
  } catch {
    return NextResponse.json({ message: 'Failed to send email', success: false }, { status: 500 });
  }
}
