"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Header() {
  const pathname = usePathname();
  const [isHomepage, setIsHomepage] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 
  useEffect(() => {
    setIsHomepage(pathname === "/");
  }, [pathname]);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
 
  const isZoomed = isScrolled || isHovered;
 
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
 
  // Determine scale class: dynamic on homepage, full size on other pages
  const currentScaleClass = isHomepage
    ? isZoomed
      ? "scale-105"
      : "scale-90 md:scale-95"
    : "scale-100";
 
  return (
    <>
      {/* Top Navbar */}
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isHomepage
            ? isZoomed
              ? "bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)]"
              : "bg-transparent border-b border-transparent shadow-none"
            : "bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)]"
        }`}
      >
        <div
          className={`relative flex justify-center items-center w-full px-6 max-w-container-max mx-auto min-h-[73px] transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            isHomepage
              ? isZoomed
                ? "py-5 translate-y-1.5"
                : "py-2.5 translate-y-0"
              : "py-3.5 translate-y-0"
          }`}
        >
          {/* Logo */}
          <div className={`absolute left-6 flex items-center transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) origin-left ${currentScaleClass}`}>
            <Link
              href="/"
              className="bg-white/95 px-4.5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] border border-slate-200/30 flex items-center gap-2 hover:bg-white transition-all active:scale-95 select-none"
            >
              <img
                alt="Easy Support Logo"
                className="h-7 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-Ug6ncPOD3fi6ZLOPuhK2NSsGc-sww62E8fk4PJ7_feq9NddbFrogYKQ-dGbqAuyCAtZJ71Nbqs7Uv4dFLYPfH9E1VTCj7l5jIQdrHrPGk_QlEvH3d6M6QwpqrXMe9GLE4dEVXzcN_BCM3smyIClvXft15AVWLmIUqsL911BavidjvHBYPuX6BHLZ4O4KlHhuAqEp76W0oWJjt4THas2XGKkswdz9SWPFfPoxgdQpuHeIRxSd5QEuJUUoW9pJbOPOcACWd1BQ-9K"
              />
              <span className="hidden lg:inline font-headline font-bold text-primary tracking-tight text-sm">
                Easy Support
              </span>
            </Link>
          </div>
 
          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center gap-1.5 bg-white/90 p-1.5 rounded-full border border-slate-200/30 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) origin-center ${currentScaleClass}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] border border-slate-200/30"
                      : "text-on-surface-variant hover:text-primary hover:bg-white/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Contact Button inside navbar */}
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 border ${
                pathname === "/contact"
                  ? "bg-primary text-white border-primary shadow-[0_2px_8px_rgba(0,50,129,0.2)]"
                  : "bg-gradient-to-r from-primary to-primary-container text-white border-white/10 hover:brightness-110 shadow-[0_2px_8px_rgba(0,50,129,0.12)] hover:shadow-[0_4px_12px_rgba(0,50,129,0.22)]"
              }`}
            >
              Contact
            </Link>
          </nav>
 
          {/* Hamburger Menu Wrapper (aligned right) */}
          <div className={`absolute right-6 flex items-center transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) origin-right ${currentScaleClass}`}>
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden flex items-center justify-center p-2 text-primary hover:bg-slate-100/50 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-3xl font-semibold">
                {isDrawerOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>
 
      {/* Spacer to reserve space for the fixed header on non-home pages */}
      {!isHomepage && <div className="h-[73px] w-full" />}
 
      {/* Mobile Drawer Menu Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
 
      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 z-40 w-64 bg-white/80 backdrop-blur-xl border-l border-white/20 p-6 shadow-2xl md:hidden transition-transform duration-300 ${
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
                className={`text-body-lg font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-slate-100/60 border border-slate-200/20 pl-4"
                    : "text-on-surface-variant pl-4 hover:text-primary hover:bg-slate-50/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`w-full text-center px-6 py-3 rounded-full font-bold transition-all active:scale-95 mt-4 border ${
              pathname === "/contact"
                ? "bg-primary text-white border-primary"
                : "bg-gradient-to-r from-primary to-primary-container text-white border-white/10 shadow-[0_4px_12px_rgba(0,50,129,0.15)]"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
 
      {/* Bottom Action Nav Bar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/70 backdrop-blur-xl border-t border-white/20 shadow-[0_-8px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] flex justify-around items-center py-3 px-4">
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
