"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-secondary-fixed text-surface py-10 md:py-16 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 px-6 max-w-container-max mx-auto">
        {/* Branding & Contact Column */}
        <div className="space-y-6">
          <div className="flex flex-col items-start" style={{ marginLeft: "4px" }}>
            <div className="font-sans" style={{ color: "#ffffff", fontSize: "20px", fontWeight: 600, letterSpacing: "0.2px", lineHeight: "1" }}>EASY SUPPORT TYPING SERVICES</div>
          </div>
          <p className="text-surface-variant opacity-80 font-body text-sm leading-relaxed">
            Your trusted partner for corporate services, PRO solutions, and business establishment in the Emirates since 2009.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:info@easysupport.ae"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined text-surface text-lg">mail</span>
            </a>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
              aria-label="WhatsApp Us"
            >
              <span className="material-symbols-outlined text-surface text-lg">share</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="text-surface font-headline text-lg font-semibold border-b border-surface/20 pb-2">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Inquiries Column */}
        <div className="space-y-6">
          <h4 className="text-surface font-headline text-lg font-semibold border-b border-surface/20 pb-2">Business Inquiries</h4>
          <p className="text-surface-variant opacity-80 text-sm mb-4">Interested in working with us?</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:info@easysupport.ae" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                info@easysupport.ae
              </a>
            </li>
            <li>
              <a href="tel:+97142562001" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base">call</span>
                +971 4 256 2001
              </a>
            </li>
          </ul>
        </div>


      </div>

      <div className="max-w-container-max mx-auto px-6 mt-16 pt-8 border-t border-surface/10 text-center">
        <p className="text-surface-variant opacity-60 text-xs">
          © {new Date().getFullYear()} Easy Support Typing Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
