import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { firstName, lastName, company, email, phone, message } = await request.json();
    const name = `${firstName} ${lastName}`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.STMP_USERNAME,
            pass: process.env.STMP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: 'no-reply',
            to: 'info@rdas.com.ng',
            subject: 'You have a new consultation request',
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}\nPhone: ${phone}`,
        });

        return NextResponse.json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
      }
}
