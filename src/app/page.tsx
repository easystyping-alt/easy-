"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const partnerLogos = [
  { src: "/logos/government-of-dubai-seeklogo.png", alt: "Government of Dubai" },
  { src: "/logos/dubai-economy-and-tourism-seeklogo.png", alt: "Dubai Economy and Tourism" },
  { src: "/logos/dubai-roads-transport-authority-seeklogo.png", alt: "RTA Dubai" },
  { src: "/logos/dubai-municipality-seeklogo.png", alt: "Dubai Municipality" },
  { src: "/logos/tas-heel-dubai-uae-seeklogo.png", alt: "Tas-heel Services" },
  { src: "/logos/amer-seeklogo.png", alt: "Amer Services" },
  { src: "/logos/United Arab Emirates Vector Logo.jpg", alt: "United Arab Emirates" },
  { src: "/logos/429-4297405_high-resolution-low-resolution-dubai-courts-logo.png", alt: "Dubai Courts" },
  { src: "/logos/uaeicp-federal-authority-for-identity-citizenshi-seeklogo.png", alt: "Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)" },
  { src: "/logos/department-of-economic-development-logo.png", alt: "Department of Economic Development" },
  { src: "/logos/dha-medical-education-department-logo.png", alt: "Dubai Health Authority (DHA)" },
  { src: "/logos/dubai-government-human-resources-dept-dghr-logo-png_seeklogo-365674.png", alt: "Dubai Government Human Resources Department (DGHR)" },
  { src: "/logos/dubai-immigration-logo.png", alt: "GDRFA Dubai Immigration" },
  { src: "/logos/dubai-police-logo-png_seeklogo-406444.png", alt: "Dubai Police" },
];

export default function Home() {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("scroll-reveal-left")) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-12");
          } else if (entry.target.classList.contains("scroll-reveal-right")) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-12");
          }
        } else {
          // Reset elements when they scroll out of the viewport
          if (entry.target.classList.contains("scroll-reveal-left")) {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            entry.target.classList.add("opacity-0", "-translate-x-12");
          } else if (entry.target.classList.contains("scroll-reveal-right")) {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            entry.target.classList.add("opacity-0", "translate-x-12");
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".scroll-reveal-left, .scroll-reveal-right");
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const switchSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Testimonial State
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "Tech Startup Founder",
      quote: "Easy Support made my license renewal effortless. Their team handled everything with the DED while I focused on my business. Truly professional!",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNFjJh992lN5Jj-TPi3N_QK1v7YfRCpJW2EnWLcTRq8rTA5AmsEfZ2AXAIA6wUiDQHRYoYzIL6_72UxpYH4fBZ2xh89YkGs2y84SDVSLNO66llJ3-KNZYsaJwHTRbbuLKb-AiCyd-PT2QhTKyDLH2ibzOFW6Xf5Kv10e5dYwgRHJYtXDN_Llm9g3UYCqBMiSoBL6BPFgZX9-U82FGvywhHFuY9rP2dsmiK6i8jLaixgdM0HromnhuRxN1ia-H0zR8cakFPZbJBBXdi",
    },
    {
      name: "Sarah Al-Mansoori",
      role: "Logistics Director",
      quote: "The legal translation services here are unmatched. Quick turnaround and perfect accuracy. I highly recommend them for all PRO needs.",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEQeuS7OOp4A60vxEfMZkYQTQNOjuJeVdywpE1S9sS-y3SVEsF8ucsd8BtBg01zZYG6f0LXlvZFAoZxbga4mP-z3nOVxPVTsok_BI84Ph_WOuoEOg1evX5tWn9upTQDD0uERHym7nauGFImN9iTHWX3KXl4LORxpy34yeMACjPoAdDVRZzCk0FA3H4xk2zqPL-07BBhTGQ_gXfelX2ac7Z3IcPhlo7wJADhRMxCE3ZK_gXuj8o21aNAtdl0_xkGa6vFzcmvgVRXxza",
    },
    {
      name: "David Chen",
      role: "Retail Investor",
      quote: "Setting up my trade license was a breeze. They explained every step clearly and handled all the paperwork. Best service in Dubai!",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC09ndEeCdyNcbWfxfWc5H4XCagEjX90qBxgRO8kosAHYfudYrz_upQbJnjTncoBnnCRuoMXjkeRNIVdX1Ma8vwXvlE6QsDJ_HygqFaeeTNpgM_boX55IQo7p585vGnsNBo-Gyd3IAspqQnrYOOoR79bfVKrkZsxO52zQRA0F5AE0aJ1i-NbdVwqJkoaxa3uQtewEWU5siSFfIwJykSc795AYh0LhJdKMCX4HhBMn0z2x9NZhsEFUF6yxHxhzXirCDRDbfjX7UHeDDR",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-black select-none">
        <div className="h-full relative">
          {/* Slide 1 */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center text-center px-6 ${
              currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0">
              <img
                alt="Dubai skyline view"
                className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                src="/images/fmvmm.png"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <h1 className="font-headline font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                We Build the Base,<br />You Build the Brand
              </h1>
              <p className="font-sans text-body-lg text-white/90 max-w-2xl mx-auto drop-shadow">
                Unlock your business potential in the UAE with expert guidance and seamless government transactions tailored for modern entrepreneurs.
              </p>
              <div className="flex justify-center gap-4 pt-6">
                <Link
                  href="/services"
                  className="bg-primary px-4 py-2.5 md:px-8 md:py-4 text-sm md:text-base text-white font-bold rounded-lg flex items-center gap-2 hover:bg-primary-container transition-all shadow-lg active:scale-95"
                >
                  Get Started <span className="material-symbols-outlined text-[16px] md:text-[20px]">chevron_right</span>
                </Link>
                <Link
                  href="/about"
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-sm md:text-base text-white font-bold rounded-lg px-4 py-2.5 md:px-8 md:py-4 hover:bg-white/30 transition-all active:scale-95"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center text-center px-6 ${
              currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0">
              <img
                alt="Business meeting in Dubai"
                className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                src="/images/screen.png"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <h1 className="font-headline font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                Your Trusted UAE PRO &amp;<br />Business Setup Partner
              </h1>
              <p className="font-sans text-body-lg text-white/90 max-w-2xl mx-auto drop-shadow">
                Navigating complex government processes with ease. From visa processing to legal translations, we are your digital concierge.
              </p>
              <div className="flex justify-center gap-4 pt-6">
                <Link
                  href="/services"
                  className="bg-secondary px-4 py-2.5 md:px-8 md:py-4 text-sm md:text-base text-white font-bold rounded-lg flex items-center gap-2 hover:bg-secondary-container transition-all shadow-lg active:scale-95"
                >
                  Our Services <span className="material-symbols-outlined text-[16px] md:text-[20px]">account_balance</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button
            onClick={() => switchSlide(1)}
            className={`w-12 h-1.5 rounded-full transition-all ${
              currentSlide === 1 ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => switchSlide(2)}
            className={`w-12 h-1.5 rounded-full transition-all ${
              currentSlide === 2 ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label="Slide 2"
          />
        </div>
      </section>

      {/* UAE Government Bodies Marquee */}
      <section className="py-8 md:py-14 bg-primary border-y border-primary/40 overflow-hidden select-none">
        <div className="service-marquee">
          <div className="marquee-content flex gap-4 md:gap-8">
            {partnerLogos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="bg-white px-4 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl border border-border-light flex items-center justify-center h-20 md:h-32 w-48 md:w-64 shadow-md hover:shadow-lg transition-all duration-300 shrink-0">
                <img src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-24 max-w-[85%] object-contain transition-all duration-300" />
              </div>
            ))}
          </div>
          {/* Duplicated for seamless loop */}
          <div className="marquee-content flex gap-4 md:gap-8" aria-hidden="true">
            {partnerLogos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="bg-white px-4 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl border border-border-light flex items-center justify-center h-20 md:h-32 w-48 md:w-64 shadow-md hover:shadow-lg transition-all duration-300 shrink-0">
                <img src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-24 max-w-[85%] object-contain transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 md:py-20 px-6 max-w-container-max mx-auto overflow-hidden">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 relative scroll-reveal-left opacity-0 -translate-x-12 transition-all duration-1000 ease-out">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed opacity-30 rounded-full blur-3xl"></div>
            <div className="rounded-xl overflow-hidden relative z-10 border border-border-light shadow-xl">
              <img
                className="w-full h-[500px] object-cover"
                alt="A clean corporate brochure for Easy Support Typing Services on a business desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKrivT_tPAxBpT0ZYtQfyHBOELT1XhrPcOUPZaSRNkXR9EeQmOokOgzPpY_B-SK2Wc3I5Y0ALuyQiipCzc4y6troEEp4kCC_swudn3Oec8xIt3x-dFl-7ALFXd7OCRwqP1W4J8lgB6m2AniFpROHDVNuuhCAbcd2c1Q7BEHkPefdagWKFkVSqSuDkYO9UR3P8x8iMmpH8AgqsCD78Bilb0P6QJFJAGyd9PpVqmYkwVhVnMc4Rook4zScykPXCgcTbhACmPqQCztNIL"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg shadow-lg z-20 hidden md:block border border-primary/10">
              <div className="text-4xl font-headline font-bold text-primary">15+</div>
              <div className="text-sm font-medium text-on-surface-variant">Years of Excellence</div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-12 space-y-6 scroll-reveal-right opacity-0 translate-x-12 transition-all duration-1000 ease-out delay-150">
            <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-secondary"></span> About Us
            </div>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary leading-snug">
              Your Premium Gateway to All Government Transactions
            </h2>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              Easy Support Typing Service is a leading business setup and PRO services provider in Dubai. Operating with great vision and passion, we are committed to customer satisfaction. Our experienced team is familiar with all government departments, ensuring your services are delivered in a timely and efficient manner.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-secondary font-bold">verified</span>
                <h4 className="font-headline font-bold text-primary">Reliable</h4>
                <p className="text-sm text-on-surface-variant">Accurate documentation with zero errors.</p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-secondary font-bold">speed</span>
                <h4 className="font-headline font-bold text-primary">Fast Track</h4>
                <p className="text-sm text-on-surface-variant">Expedited processing for critical tasks.</p>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/about" className="text-primary font-bold inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
                View Full Company Profile <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-surface-soft-blue">
        <div className="px-6 max-w-container-max mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Why Entrepreneurs Trust Easy Support</h2>
            <p className="font-sans text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Providing wings to the dreams of budding entrepreneurs across the Middle East with institutional stability.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Large Bento Card */}
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border-light group flex flex-col justify-between">
              <div className="space-y-4 md:space-y-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">handshake</span>
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-semibold text-primary">Institutional Stability</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Our deep-rooted connections with government agencies like Amer, Tas-heel, and the Dubai Economy Department allow us to navigate bureaucracy with unrivaled precision.
                </p>
              </div>
              <img
                className="mt-8 rounded-lg h-44 object-cover"
                alt="A corporate handshake between two business partners"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4AURzrn-q3Ht-mFbYDeyVMJEpoczJZTY7nOLIIEQo7mnArLuV71td4NpA_qWJD5j9iWEBDRAqr1ztLE8Wepn-WCUhlQC4svlBvGSAMBDndQUeOqz_Ymexq4PLH7TQKISIjQZNCCS_O7ePYtYA5XV69xVy2z8b5-ZnKNfqu4tFtC-nHrghojEc7xVmgKW4A0AqDSPCCyAMkZfhCKp_8m0LPC-rTU2HtbeL2TsTC9ek6lkuFa2KyaBMSKiwbrx6guUsAV9IOzSPTvsj"
              />
            </div>
 
            {/* Small Bento Card 1 */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border-light group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors mb-4 md:mb-6">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Efficiency</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Real-time status updates and accelerated filing times for all visas.
              </p>
            </div>
 
            {/* Small Bento Card 2 */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border-light group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors mb-4 md:mb-6">
                <span className="material-symbols-outlined text-2xl">fact_check</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Precision</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Expert proofreading and legal accuracy in every translation.
              </p>
            </div>
 
            {/* Double Bento Card */}
            <div className="md:col-span-2 bg-primary p-6 md:p-8 rounded-2xl shadow-lg flex items-center gap-4 md:gap-8 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-headline font-semibold">Need a Cost Estimate?</h3>
                <p className="text-white/80 text-sm max-w-sm">
                  Contact our expert team to get a detailed breakdown of your business setup or visa costs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-secondary-fixed transition-colors active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
              <div className="hidden sm:block absolute -right-4 -bottom-6 opacity-20 select-none">
                <span className="material-symbols-outlined text-[150px] font-thin" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-6 max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-6 text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-block px-4 py-1.5 bg-secondary-fixed text-primary font-mono text-xs font-semibold rounded-full uppercase">
                Success Stories
              </div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
            </div>
          </div>

          <div className="relative px-4 md:px-14">
            {/* Prev Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-outline-variant rounded-full flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90 z-20 shadow-md"
              aria-label="Previous Testimonial"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="overflow-hidden min-h-[320px] py-4">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((t, idx) => {
                  const isActive = idx === activeTestimonial;
                  return (
                    <div
                      key={idx}
                      className={`bg-surface p-6 md:p-8 rounded-xl border transition-all duration-500 relative ${
                        isActive
                          ? "border-secondary shadow-lg scale-100 opacity-100 z-10 block"
                          : "border-border-light opacity-60 md:opacity-100 scale-95 hidden md:block"
                      }`}
                    >
                      <span className="material-symbols-outlined text-secondary-container text-5xl md:text-6xl absolute top-4 right-4 opacity-30 select-none">
                        format_quote
                      </span>
                      <div className="flex gap-1 mb-4 md:mb-6 text-[#FFB800]">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-base md:text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                        ))}
                      </div>
                      <p className="font-sans text-sm md:text-body-md text-on-surface-variant italic mb-6 md:mb-8 leading-relaxed">
                        &quot;{t.quote}&quot;
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-border-light bg-surface-dim shrink-0">
                          <img className="w-full h-full object-cover" alt={`${t.name} Portrait`} src={t.avatar} />
                        </div>
                        <div>
                          <div className="font-bold text-primary text-sm font-headline">{t.name}</div>
                          <div className="text-[11px] text-text-muted uppercase tracking-wider font-mono font-medium">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-outline-variant rounded-full flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90 z-20 shadow-md"
              aria-label="Next Testimonial"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
