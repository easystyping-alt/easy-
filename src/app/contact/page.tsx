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

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert("Your message has been sent successfully. One of our corporate specialists will contact you shortly.");
    }, 1000);
  };

  return (
    <div className="max-w-container-max mx-auto px-6 py-12 md:py-20">
      {/* Page Title */}
      <section className="mb-12 text-center lg:text-left space-y-4">
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary">Contact Our Specialists</h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Have questions about visa processing, PRO liaison, or company setup in Dubai? Our expert team is ready to guide you.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-border-light rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="font-headline text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
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
              disabled={submitted}
              className={`w-full py-4 rounded-lg font-bold transition-all shadow-md active:scale-95 text-sm flex items-center justify-center gap-2 ${
                submitted ? "bg-secondary text-white" : "bg-primary text-on-primary hover:bg-primary-container"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {submitted ? "sync" : "send"}
              </span>
              {submitted ? "Sending inquiry..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Office details and Quick contact details */}
        <div className="lg:col-span-5 space-y-8">
          {/* Contact Details Card */}
          <div className="bg-surface-container-low border border-border-light rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="font-headline text-xl font-bold text-primary">Office Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-white p-2.5 rounded-lg border border-border-light shadow-sm">
                  location_on
                </span>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                    HQ Location
                  </p>
                  <p className="font-bold text-primary font-headline text-sm mt-0.5">
                    Suite 204, Commercial Tower, Sheikh Zayed Road, Dubai, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-white p-2.5 rounded-lg border border-border-light shadow-sm">
                  call
                </span>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                    Phone Support
                  </p>
                  <p className="font-bold text-primary font-headline text-sm mt-0.5">+971 4 320 6051</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-white p-2.5 rounded-lg border border-border-light shadow-sm">
                  mail
                </span>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="font-bold text-primary font-headline text-sm mt-0.5">info@easysupport.ae</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-white p-2.5 rounded-lg border border-border-light shadow-sm">
                  schedule
                </span>
                <div>
                  <p className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                    Opening Hours
                  </p>
                  <p className="font-bold text-primary font-headline text-sm mt-0.5">
                    Mon - Sat: 8:00 AM - 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Channels */}
            <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">chat</span> WhatsApp Us
              </a>
              <a
                href="tel:+97143206051"
                className="flex-1 bg-secondary text-white py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-secondary-container transition-colors"
              >
                <span className="material-symbols-outlined text-lg">call</span> Call Direct
              </a>
            </div>
          </div>

          {/* Map Grid */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border-light h-72 relative">
            <img
              className="w-full h-full object-cover"
              alt="Google Map Sheikh Zayed Road Dubai Location Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuu_GDajykLS0jncDJbdIiMlVVqAIi8-WnmeeUZTyA83kJNkgkBA2G5_6BpYhDXaPbMcuFw8UxGRXqc2E8Em4-zTXURxmrqU36MHNeQCTcfROcmZbc-6TEq96r4SVtwQqjRjYyzwl43_Ls25XoqZquXBAr7dmoSobEjFv4lbjm6PHP1vkB6Pruki8CZwLGHbhETl2jDZtI3YvdY68q_Ocm3SiiEcUjNETSY49BMXiPpI3yNGwbW70QrXmxTxqf1gwovEVwTIpPUF6j"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            <div className="absolute top-4 left-4 glass-card p-3 rounded-lg border border-white/30 text-xs">
              <p className="font-bold text-primary">Easy Support Typing Services HQ</p>
              <p className="text-on-surface-variant mt-0.5">Sheikh Zayed Road, Dubai</p>
            </div>
          </div>
        </div>
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
