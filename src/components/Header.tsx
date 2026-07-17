"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Cost Calculator", href: "/calculator" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
  ];

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border-light bg-surface/90 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-container-max mx-auto">
          {/* Logo */}
          <Link href="/" className="text-headline-md font-headline font-bold text-primary flex items-center gap-2 select-none">
            <img
              alt="Easy Support Logo"
              className="h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-Ug6ncPOD3fi6ZLOPuhK2NSsGc-sww62E8fk4PJ7_feq9NddbFrogYKQ-dGbqAuyCAtZJ71Nbqs7Uv4dFLYPfH9E1VTCj7l5jIQdrHrPGk_QlEvH3d6M6QwpqrXMe9GLE4dEVXzcN_BCM3smyIClvXft15AVWLmIUqsL911BavidjvHBYPuX6BHLZ4O4KlHhuAqEp76W0oWJjt4THas2XGKkswdz9SWPFfPoxgdQpuHeIRxSd5QEuJUUoW9pJbOPOcACWd1BQ-9K"
            />
            <span className="hidden md:inline font-bold tracking-tight">Easy Support</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-body-md font-medium transition-colors py-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button / Burger Menu Wrapper */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:inline-block px-6 py-2 rounded-lg font-bold transition-all active:scale-95 border ${
                pathname === "/contact"
                  ? "bg-primary text-white border-primary"
                  : "bg-primary-container text-white border-primary-container hover:bg-primary"
              }`}
            >
              Contact
            </Link>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden flex items-center justify-center p-2 text-primary hover:bg-surface-container-low rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-3xl font-semibold">
                {isDrawerOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 z-40 w-64 bg-surface border-l border-border-light p-6 shadow-xl md:hidden transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5 mt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-body-lg font-medium transition-colors ${
                  isActive ? "text-primary font-bold border-l-4 border-primary pl-2" : "text-on-surface-variant pl-2 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`w-full text-center px-6 py-3 rounded-lg font-bold transition-all active:scale-95 mt-4 border ${
              pathname === "/contact"
                ? "bg-primary text-white border-primary"
                : "bg-primary-container text-white border-primary-container hover:bg-primary"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Bottom Action Nav Bar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface border-t border-border-light shadow-2xl flex justify-around items-center py-3 px-4">
        <a
          className="text-on-surface-variant flex flex-col items-center hover:text-primary transition-colors"
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="text-[11px] font-medium mt-0.5">WhatsApp</span>
        </a>
        <Link
          className={`flex flex-col items-center transition-colors ${
            pathname === "/calculator" ? "text-primary" : "text-on-surface-variant hover:text-primary"
          }`}
          href="/calculator"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: pathname === "/calculator" ? "'FILL' 1" : "'FILL' 0" }}>
            request_quote
          </span>
          <span className="text-[11px] font-medium mt-0.5">Quote</span>
        </Link>
        <a
          className="text-on-surface-variant flex flex-col items-center hover:text-primary transition-colors"
          href="tel:+97140000000"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
          <span className="text-[11px] font-medium mt-0.5">Call Us</span>
        </a>
        <Link
          className={`flex flex-col items-center transition-colors ${
            pathname === "/services" ? "text-primary" : "text-on-surface-variant hover:text-primary"
          }`}
          href="/services#branches"
        >
          <span className="material-symbols-outlined text-2xl">location_on</span>
          <span className="text-[11px] font-medium mt-0.5">Locate</span>
        </Link>
      </nav>
    </>
  );
}
