import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Validate input (basic check)
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create Transporter
        // Note: In production, use environment variables for these values
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.example.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER || "user@example.com",
                pass: process.env.SMTP_PASS || "password",
            },
        });

        // Email Content
        const mailOptions = {
            from: process.env.SMTP_FROM || '"LM Global Website" <noreply@lmglobaloverseas.com>',
            to: process.env.CONTACT_EMAIL || "info@lmglobaloverseas.com",
            subject: `New Lead: ${name} - ${service}`,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Interest: ${service}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        // Send Email (Mock if no env vars)
        if (!process.env.SMTP_HOST) {
            console.log("Mock Email Sent:", mailOptions);
            // Simulate delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
            await transporter.sendMail(mailOptions);
        }

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
