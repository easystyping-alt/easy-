"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
 
  const isZoomed = isScrolled;
 
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
 
  // Keep elements scale stable at scale-100 to prevent text blurring during layout morphing
  const currentScaleClass = "scale-100";
 
  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ease-in-out ${
          isZoomed
            ? "w-[90%] md:w-[85%] max-w-container-max mt-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : isHomepage
              ? "w-full mt-0 rounded-none bg-transparent border-b border-transparent shadow-none"
              : "w-full mt-0 rounded-none bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)]"
        }`}
      >
        <div
          className={`relative flex items-center w-full max-w-container-max mx-auto transition-all duration-500 ease-in-out ${
            isZoomed
              ? "min-h-[64px] py-2.5 px-8"
              : "min-h-[85px] py-4.5 px-6 md:px-12"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center transition-all duration-500 ease-in-out origin-left z-10">
            <Link
              href="/"
              className={`flex items-center transition-all duration-500 ease-in-out active:scale-95 select-none ${
                isZoomed ? "gap-1.5" : "gap-2.5"
              }`}
            >
              <img
                alt="Easy Support Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-Ug6ncPOD3fi6ZLOPuhK2NSsGc-sww62E8fk4PJ7_feq9NddbFrogYKQ-dGbqAuyCAtZJ71Nbqs7Uv4dFLYPfH9E1VTCj7l5jIQdrHrPGk_QlEvH3d6M6QwpqrXMe9GLE4dEVXzcN_BCM3smyIClvXft15AVWLmIUqsL911BavidjvHBYPuX6BHLZ4O4KlHhuAqEp76W0oWJjt4THas2XGKkswdz9SWPFfPoxgdQpuHeIRxSd5QEuJUUoW9pJbOPOcACWd1BQ-9K"
                className={`w-auto transition-all duration-500 ease-in-out ${
                  isZoomed ? "h-9 md:h-11" : "h-11 md:h-14"
                }`}
              />
              <div className="flex flex-col justify-center items-start transition-all duration-500 ease-in-out" style={{ marginLeft: "8px" }}>
                {isHomepage ? (
                  <>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[11px] md:text-[13px]' : 'text-[13px] md:text-[16px]'}`} style={{ color: isZoomed ? "#1b3580" : "#000000", fontWeight: 700, letterSpacing: "0px", lineHeight: "1.1" }}>
                      ايزي سابورت لخدمات الطباعة
                    </span>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[14px] md:text-[16px]' : 'text-[16px] md:text-[22px]'}`} style={{ color: isZoomed ? "#33a1d9" : "#33a1d9", fontWeight: 800, letterSpacing: "0.5px", lineHeight: "1", textTransform: "uppercase", marginTop: "2px" }}>
                      EASY SUPPORT
                    </span>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[8px] md:text-[10px]' : 'text-[10px] md:text-[13px]'}`} style={{ color: isZoomed ? "#1b3580" : "#000000", fontWeight: 700, letterSpacing: "1px", lineHeight: "1.2", textTransform: "uppercase", marginTop: "1px" }}>
                      TYPING SERVICES
                    </span>
                  </>
                ) : (
                  <>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[11px] md:text-[13px]' : 'text-[13px] md:text-[16px]'}`} style={{ color: "#1b3580", fontWeight: 700, letterSpacing: "0px", lineHeight: "1.1" }}>
                      ايزي سابورت لخدمات الطباعة
                    </span>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[14px] md:text-[16px]' : 'text-[16px] md:text-[22px]'}`} style={{ color: "#33a1d9", fontWeight: 800, letterSpacing: "0.5px", lineHeight: "1", textTransform: "uppercase", marginTop: "2px" }}>
                      EASY SUPPORT
                    </span>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[8px] md:text-[10px]' : 'text-[10px] md:text-[13px]'}`} style={{ color: "#1b3580", fontWeight: 700, letterSpacing: "1px", lineHeight: "1.2", textTransform: "uppercase", marginTop: "1px" }}>
                      TYPING SERVICES
                    </span>
                  </>
                )}
              </div>
            </Link>
          </div>
 
          {/* Left Spacer (flex-1) */}
          <div className="flex-1" />
 
          {/* Desktop Nav Links */}
          <nav className={`hidden lg:flex items-center transition-all duration-500 ease-in-out origin-center z-10 ${
            isZoomed
              ? "gap-2 bg-transparent p-0"
              : "gap-3 xl:gap-5 bg-transparent p-0"
          }`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold rounded-full border transition-all duration-500 ease-in-out whitespace-nowrap ${
                    isZoomed
                      ? "text-sm px-4 py-1.5"
                      : "text-sm lg:text-base px-4 xl:px-6 py-2.5"
                  } ${
                    isActive
                      ? isZoomed
                        ? "text-primary bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] border-slate-200/30"
                        : isHomepage
                          ? "text-white bg-white/20 border-white/30"
                          : "text-primary bg-slate-100 border-slate-200/30"
                      : isZoomed
                        ? "text-on-surface-variant bg-slate-50/20 border-transparent hover:border-slate-200/30 hover:bg-slate-50/60"
                        : isHomepage
                          ? "text-white/90 bg-white/5 border-transparent hover:border-white/20 hover:bg-white/10"
                          : "text-on-surface-variant bg-slate-50/10 border-transparent hover:border-slate-200/30 hover:bg-slate-50/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Contact Button inside navbar */}
            <Link
              href="/contact"
              className={`rounded-full font-bold transition-all duration-500 ease-in-out active:scale-95 border whitespace-nowrap ${
                isZoomed
                  ? "text-sm px-5 py-1.5"
                  : "text-sm lg:text-base px-5 xl:px-6.5 py-2.5"
              } ${
                isHomepage && !isZoomed
                  ? "bg-white text-primary border-white hover:bg-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                  : pathname === "/contact"
                    ? "bg-primary text-white border-primary shadow-[0_2px_8px_rgba(0,50,129,0.2)]"
                    : "bg-gradient-to-r from-primary to-primary-container text-white border-white/10 hover:brightness-110 shadow-[0_2px_8px_rgba(0,50,129,0.12)] hover:shadow-[0_4px_12px_rgba(0,50,129,0.22)]"
              }`}
            >
              Contact
            </Link>
          </nav>
 
          {/* Right Spacer */}
          <div className={`transition-all duration-500 ease-in-out ${isZoomed ? "flex-1" : "flex-none w-0"}`} />
 
          {/* Hamburger Menu Wrapper (aligned right) */}
          <div className="flex items-center transition-all duration-500 ease-in-out origin-right z-10">
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className={`lg:hidden flex items-center justify-center p-2 rounded-full transition-colors focus:outline-none ${
                isZoomed
                  ? "text-primary hover:bg-slate-100/50"
                  : isHomepage
                    ? "text-white hover:bg-white/10"
                    : "text-primary hover:bg-slate-100/50"
              }`}
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
      {!isHomepage && <div className="h-[85px] w-full" />}
 
      {/* Mobile Drawer Menu Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
 
      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 z-40 w-72 bg-primary backdrop-blur-2xl border-l border-white/10 p-6 shadow-[-10px_0_40px_rgba(0,0,0,0.3)] lg:hidden transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-col gap-3 mt-6 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg font-headline font-semibold px-5 py-3.5 rounded-2xl transition-all duration-500 ease-in-out flex items-center ${
                    isActive
                      ? "text-white bg-secondary shadow-lg translate-x-2"
                      : "text-white/70 hover:text-white hover:bg-white/10 hover:translate-x-2"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto pb-24">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-xl ${
                pathname === "/contact"
                  ? "bg-secondary text-white"
                  : "bg-white text-primary hover:bg-slate-50"
              }`}
            >
              <span className="material-symbols-outlined text-xl">support_agent</span>
              Contact Us
            </Link>
          </div>
        </div>
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
