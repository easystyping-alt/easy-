"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-secondary-fixed text-surface py-16 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 max-w-container-max mx-auto">
        {/* Branding & Contact Column */}
        <div className="space-y-6">
          <div className="text-headline-md font-headline font-bold text-surface">Easy Support</div>
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
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div className="space-y-6">
          <h4 className="text-surface font-headline text-lg font-semibold border-b border-surface/20 pb-2">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Amer &amp; Tasheel Services
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Medical &amp; Emirates ID
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Legal Translation
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-surface-variant opacity-80 hover:opacity-100 hover:text-secondary-container transition-all">
                Company Formation
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Contact Details */}
        <div className="space-y-6">
          <h4 className="text-surface font-headline text-lg font-semibold border-b border-surface/20 pb-2">Newsletter</h4>
          <p className="text-surface-variant opacity-80 text-sm mb-4">Stay updated with latest UAE laws and business news.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-surface/10 border border-surface/20 rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-secondary focus:border-secondary text-white placeholder-surface/40 text-sm outline-none"
              placeholder="Email Address"
              type="email"
              required
            />
            <button className="bg-secondary px-4 py-2 rounded-r-lg hover:bg-secondary-container transition-all flex items-center justify-center" aria-label="Subscribe">
              <span className="material-symbols-outlined text-surface">send</span>
            </button>
          </form>
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
