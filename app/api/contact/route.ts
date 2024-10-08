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
            to: 'zeeblink7@gmail.com', 
            subject: 'New contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
        });

        return NextResponse.json({ message: 'Message sent successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send message' });
    }
}