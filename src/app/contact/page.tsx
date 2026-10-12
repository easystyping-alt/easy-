"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const serviceMap: Record<string, string> = {
  amer: "Amer Residency & Visa Services",
  tasheel: "Tasheel Labour & MOHRE Services",
  tawjeeh: "Tawjeeh Guidance & Labour Training",
  tadbeer: "Tadbeer Domestic Worker Services",
  emiratesid: "Emirates ID Biometrics & Renewal",
  medical: "Visa Medical Fitness Coordination",
  rta: "RTA Vehicle & Driving Licensing",
  chamber: "Dubai Chamber Registration & COO",
  municipality: "Dubai Municipality Approvals & Permits",
  customs: "Dubai Customs Client Code & Clearing",
  notary: "Notary Public POA & Court Services",
  translation: "Ministry Certified Legal Translation",
  attestation: "MOFA & Embassy Document Attestation",
  trademark: "Trademark Registration & ISO Standards",
  accounting: "Corporate Tax & VAT Accounting",
  travel: "Tourist Visa & Travel Packages",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setFeedback({
        type: "success",
        text: "Thank you! Your message has been delivered to info@easysupport.ae. Our specialists will get back to you shortly.",
      });

      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        text: err?.message || "Something went wrong while sending your inquiry. Please try again or contact us via WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (serviceParam && serviceMap[serviceParam]) {
      setFormState((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${serviceMap[serviceParam]}`,
      }));
    } else if (serviceParam) {
      setFormState((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${serviceParam}`,
      }));
    }
  }, [serviceParam]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Page Title */}
      <section className="mb-10 text-center space-y-4">
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary">Contact Our Specialists</h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Have questions about visa processing, PRO liaison, or company setup in Dubai? Send us a message and our team will get back to you promptly.
        </p>
      </section>

      {/* Contact Form */}
      <div className="bg-surface-container-lowest border border-border-light rounded-2xl p-6 md:p-10 shadow-sm">
        <h2 className="font-headline text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

        {feedback && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-start gap-3 border text-sm ${
              feedback.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            <span className="material-symbols-outlined text-xl shrink-0">
              {feedback.type === "success" ? "check_circle" : "error"}
            </span>
            <div className="leading-relaxed">{feedback.text}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                Full Name
              </label>
              <input
                required
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                Email Address
              </label>
              <input
                required
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                Phone Number
              </label>
              <input
                required
                type="tel"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                placeholder="+971 50 000 0000"
                className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                Subject
              </label>
              <input
                required
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="e.g. Visa Renewal or Trade License"
                className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
              Your Message
            </label>
            <textarea
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell us about your corporate needs or specific government transaction requirements..."
              className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-4 rounded-lg font-bold transition-all shadow-md active:scale-95 text-sm flex items-center justify-center gap-2 ${
              submitting ? "bg-secondary text-white cursor-not-allowed" : "bg-primary text-white hover:bg-primary-container"
            }`}
          >
            <span className={`material-symbols-outlined text-lg text-white ${submitting ? "animate-spin" : ""}`}>
              {submitting ? "progress_activity" : "send"}
            </span>
            <span className="text-white">
              {submitting ? "Sending to info@easysupport.ae..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="max-w-container-max mx-auto px-6 py-20 text-center">Loading contact form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
