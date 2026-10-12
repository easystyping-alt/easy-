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
              href="https://wa.me/971561610683"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group"
              aria-label="WhatsApp Us"
            >
              <svg
                className="w-5 h-5 fill-current text-surface group-hover:text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.14 12.39 9.74 14.86 12.19 15.92C12.77 16.17 13.23 16.32 13.58 16.43C14.17 16.62 14.71 16.59 15.13 16.53C15.61 16.46 16.6 15.93 16.81 15.34C17.02 14.75 17.02 14.25 16.96 14.14C16.9 14.03 16.74 13.97 16.5 13.85C16.26 13.73 15.08 13.15 14.86 13.07C14.64 12.99 14.48 12.95 14.32 13.19C14.16 13.43 13.7 13.97 13.56 14.13C13.42 14.29 13.28 14.31 13.04 14.19C12.8 14.07 11.79 13.74 10.59 12.67C9.66 11.84 9.03 10.82 8.85 10.51C8.67 10.2 8.83 10.03 8.95 9.91C9.06 9.8 9.19 9.62 9.31 9.48C9.43 9.34 9.47 9.24 9.55 9.08C9.63 8.92 9.59 8.78 9.53 8.66C9.47 8.54 9.01 7.41 8.82 6.96C8.63 6.52 8.44 6.58 8.3 6.57C8.17 6.56 8.02 6.56 8.53 7.33Z" />
              </svg>
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
              <a href="tel:+97145485781" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base">call</span>
                +971 4 548 5781
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
