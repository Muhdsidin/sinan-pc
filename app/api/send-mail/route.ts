import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Ssinu2257@gmail.com",
        pass: "nioxwqgkguxucgcy",
      },
    });

    await transporter.sendMail({
      from: body.email,
      to: "mhdsinanpc2257@gmail.com",
      subject: body.subject,
      text: `
Name: ${body.name}
Email: ${body.email}
Message:
${body.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
