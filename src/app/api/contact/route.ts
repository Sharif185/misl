import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/contactSchema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed.', issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, budget, message } = result.data;

    // Ensure env vars are present
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email to MISL team
    await transporter.sendMail({
      from: `"MISL Contact Form" <${emailUser}>`,
      to: 'hello@misltechnologies.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: #CCD6F6; padding: 32px; border-radius: 8px;">
          <h2 style="color: #00FFAB; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8892B0; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892B0; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00FFAB;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #8892B0; vertical-align: top;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #8892B0; vertical-align: top;">Budget</td>
              <td style="padding: 8px 0;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892B0; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"MISL Technologies" <${emailUser}>`,
      to: email,
      subject: 'We received your message — MISL Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: #CCD6F6; padding: 32px; border-radius: 8px;">
          <h2 style="color: #00FFAB; margin-top: 0;">Thanks for reaching out, ${name}!</h2>
          <p style="color: #8892B0; line-height: 1.6;">
            We've received your message and someone from the MISL team will get back to you within 1–2 business days.
          </p>
          <p style="color: #8892B0; line-height: 1.6;">
            In the meantime, feel free to explore our work at
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #00FFAB;">${process.env.NEXT_PUBLIC_SITE_URL}</a>.
          </p>
          <p style="color: #CCD6F6; margin-bottom: 0;">— The MISL Technologies Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
