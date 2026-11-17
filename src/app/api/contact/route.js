import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('❌ RESEND_API_KEY is not set in environment variables.');
      return NextResponse.json(
        { error: 'RESEND_API_KEY is missing on the server.' },
        { status: 500 }
      );
    }

    // Direct REST API call - No extra npm package needed!
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['khandanish909577@gmail.com'],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #f59e0b, #ea580c); padding: 20px; text-align: center; color: white;">
              <h2 style="margin: 0; font-size: 20px;">New Message from Portfolio</h2>
            </div>
            <div style="padding: 24px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #ea580c;">${email}</a></p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="margin: 8px 0;"><strong>Message:</strong></p>
              <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 4px solid #f59e0b; white-space: pre-wrap; font-size: 14px;">
                ${message}
              </div>
            </div>
            <div style="background-color: #f3f4f6; padding: 12px; text-align: center; font-size: 12px; color: #6b7280;">
              Sent from your portfolio contact form
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('❌ Resend API Error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to send email' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('❌ Server Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
