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
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[14px] md:text-[16px]' : 'text-[16px] md:text-[22px]'}`} style={{ color: isZoomed ? "#33a1d9" : "#33a1d9", fontWeight: 800, letterSpacing: "0.5px", lineHeight: "1", textTransform: "uppercase" }}>
                      EASY SUPPORT
                    </span>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[8px] md:text-[10px]' : 'text-[10px] md:text-[13px]'}`} style={{ color: isZoomed ? "#1b3580" : "#000000", fontWeight: 700, letterSpacing: "1px", lineHeight: "1.2", textTransform: "uppercase", marginTop: "1px" }}>
                      TYPING SERVICES
                    </span>
                  </>
                ) : (
                  <>
                    <span className={`font-headline transition-all duration-500 ease-in-out ${isZoomed ? 'text-[14px] md:text-[16px]' : 'text-[16px] md:text-[22px]'}`} style={{ color: "#33a1d9", fontWeight: 800, letterSpacing: "0.5px", lineHeight: "1", textTransform: "uppercase" }}>
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
          className="text-on-surface-variant flex flex-col items-center hover:text-[#25D366] transition-colors"
          href="https://wa.me/971561610683"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 fill-current text-[#25D366]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.14 12.39 9.74 14.86 12.19 15.92C12.77 16.17 13.23 16.32 13.58 16.43C14.17 16.62 14.71 16.59 15.13 16.53C15.61 16.46 16.6 15.93 16.81 15.34C17.02 14.75 17.02 14.25 16.96 14.14C16.9 14.03 16.74 13.97 16.5 13.85C16.26 13.73 15.08 13.15 14.86 13.07C14.64 12.99 14.48 12.95 14.32 13.19C14.16 13.43 13.7 13.97 13.56 14.13C13.42 14.29 13.28 14.31 13.04 14.19C12.8 14.07 11.79 13.74 10.59 12.67C9.66 11.84 9.03 10.82 8.85 10.51C8.67 10.2 8.83 10.03 8.95 9.91C9.06 9.8 9.19 9.62 9.31 9.48C9.43 9.34 9.47 9.24 9.55 9.08C9.63 8.92 9.59 8.78 9.53 8.66C9.47 8.54 9.01 7.41 8.82 6.96C8.63 6.52 8.44 6.58 8.3 6.57C8.17 6.56 8.02 6.56 8.53 7.33Z" />
          </svg>
          <span className="text-[11px] font-medium mt-0.5">WhatsApp</span>
        </a>
        <Link
          className={`flex flex-col items-center transition-colors ${
            pathname === "/contact" ? "text-primary" : "text-on-surface-variant hover:text-primary"
          }`}
          href="/contact"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: pathname === "/contact" ? "'FILL' 1" : "'FILL' 0" }}>
            mail
          </span>
          <span className="text-[11px] font-medium mt-0.5">Contact</span>
        </Link>
        <a
          className="text-on-surface-variant flex flex-col items-center hover:text-primary transition-colors"
          href="tel:+97145485781"
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
