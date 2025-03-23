import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY || '');
    
    // Create template parameters
    const templateParams = {
      to_name: "HIMASIA UTDI",
      from_name: `${firstName} ${lastName}`,
      reply_to: email,
      phone_number: phone || 'Not provided',
      message,
    };
    
    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID || '',
      EMAILJS_TEMPLATE_ID || '',
      templateParams,
      EMAILJS_PUBLIC_KEY || ''
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}