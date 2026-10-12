import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Submit inquiry to FormSubmit to deliver straight to info@easysupport.ae
    const response = await fetch("https://formsubmit.co/ajax/info@easysupport.ae", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://www.easysupport.ae/contact",
        Origin: "https://www.easysupport.ae",
      },
      body: JSON.stringify({
        _subject: `New Inquiry from ${name}: ${subject || "General Consultation"}`,
        _replyto: email,
        _honey: "",
        Name: name,
        Email: email,
        Phone: phone || "Not provided",
        Subject: subject || "General Inquiry",
        Message: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to transmit message to email service");
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Contact Form error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
