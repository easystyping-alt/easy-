"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    const cards = containerRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });

    const sections = containerRef.current?.querySelectorAll(".scroll-section");
    sections?.forEach((sec) => {
      observer.observe(sec);
    });

    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card);
      });
      sections?.forEach((sec) => {
        observer.unobserve(sec);
      });
    };
  }, []);

  const servicesList = [
    {
      title: "Amer Services",
      desc: "Entry permits, visa cancellation, and residency processing for families and individuals.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=amer",
    },
    {
      title: "Tasheel",
      desc: "MOHRE labor contracts, work permits, and employment related government paperwork.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=tasheel",
    },
    {
      title: "Tawjeeh",
      desc: "Labour awareness training, employer-employee guidance, and legal orientation.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=tawjeeh",
    },
    {
      title: "Tadbeer",
      desc: "Recruitment and placement services for domestic and household workers.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=tadbeer",
    },
    {
      title: "Emirates ID",
      desc: "Biometric registration, renewal, and replacement of Emirates Identity Cards.",
      image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=emiratesid",
    },
    {
      title: "Medical Services",
      desc: "Visa medical fitness tests coordination with DHA and MOH authorities.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=medical",
    },
    {
      title: "RTA Services",
      desc: "Vehicle registration, driving license renewal, and fine payments.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=rta",
    },
    {
      title: "Dubai Chamber",
      desc: "Company registration, certificates of origin, and membership renewals.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=chamber",
    },
    {
      title: "Dubai Municipality",
      desc: "Health permits, food safety certifications, and trade license approvals.",
      image: "https://images.unsplash.com/photo-1577416418012-786090949d03?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=municipality",
    },
    {
      title: "Dubai Customs",
      desc: "Client code registration, import/export permits, and customs clearance.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=customs",
    },
    {
      title: "Notary Services",
      desc: "MOA attestation, power of attorney, and legal document verification.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=notary",
    },
    {
      title: "Translation",
      desc: "Legal translation of documents from all languages to Arabic/English.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=translation",
    },
    {
      title: "Attestation",
      desc: "MOFA, Educational, and Personal document attestation services.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=attestation",
    },
    {
      title: "Trademark & ISO",
      desc: "Brand protection, logo registration, and ISO quality standard audits.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=trademark",
    },
    {
      title: "Accounting",
      desc: "VAT registration, auditing, bookkeeping, and financial statement reports.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=accounting",
    },
    {
      title: "Travel & Tourism",
      desc: "Tourist visas, air ticketing, hotel booking, and holiday packages.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
      href: "/contact?service=travel",
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="relative min-h-[calc(100vh-85px)] flex items-center overflow-hidden bg-black text-white py-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60"
            alt="Dubai Office Buildings background"
            src="/images/services_hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-headline font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
              Seamless Government <br /> <span className="text-secondary-container font-headline">Solutions in Dubai.</span>
            </h1>
            <p className="font-sans text-body-lg text-white/90 leading-relaxed max-w-2xl">
              We navigate the complexities of UAE government procedures so you don&apos;t have to. From visa processing to corporate compliance, our experts ensure your business stays ahead.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-lg"
              >
                Book a Consultation <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </Link>
              <a
                href="#branches"
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all active:scale-95"
              >
                View Branches
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-20 px-6 max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Our Comprehensive Services</h2>
          <p className="font-sans text-body-md text-text-muted max-w-2xl mx-auto">
            Your one-stop destination for all government documentation, corporate registration, and PRO services in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="service-card group opacity-0 translate-y-8 transition-all duration-700 relative overflow-hidden p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)] flex flex-col justify-between min-h-[280px] text-white border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45 group-hover:via-black/85 transition-all duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="font-headline text-xl font-bold text-white mb-3 group-hover:text-secondary-container transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-white/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="relative z-10 text-secondary-container font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto"
              >
                Learn more <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-12 md:py-20 bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 text-center relative z-10 space-y-6">
          <h2 className="font-headline text-2xl md:text-5xl font-bold">Ready to get started?</h2>
          <p className="font-sans text-body-lg text-on-primary-container max-w-xl mx-auto opacity-90 leading-relaxed">
            Contact our specialists today for a free consultation on your government or business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              className="bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-secondary-container transition-all active:scale-95 shadow-lg"
              href="tel:+97143206051"
            >
              <span className="material-symbols-outlined">call</span> Call Now
            </a>
            <a
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-surface-container transition-all active:scale-95 shadow-lg"
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Branches Network Section */}
      <section id="branches" className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-12 md:py-20 px-6 max-w-container-max mx-auto scroll-mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Our Branch Network</h2>
            <p className="font-sans text-body-md text-text-muted leading-relaxed">
              We are strategically located across Dubai to serve you better. Visit any of our branches for premium service.
            </p>
            <div className="space-y-4 pt-4">
              {[
                { name: "Al Quoz Branch", desc: "Inside Pasons 17 Hypermarket, Al Quoz Ind 2" },
                { name: "Grand Hyper Branch", desc: "Jabel Ali Ind-2, Grand Hyper Market" },
                { name: "Dubai Investment Park", desc: "Park Shopping Mall, DIP" },
              ].map((branch, bidx) => (
                <div key={bidx} className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-border-light">
                  <span className="material-symbols-outlined text-secondary select-none">location_on</span>
                  <div>
                    <p className="font-bold text-primary font-headline">{branch.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{branch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
            <div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative">
              <img
                className="w-full h-full object-cover"
                alt="A stylized vector map of Dubai showing branch markers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuu_GDajykLS0jncDJbdIiMlVVqAIi8-WnmeeUZTyA83kJNkgkBA2G5_6BpYhDXaPbMcuFw8UxGRXqc2E8Em4-zTXURxmrqU36MHNeQCTcfROcmZbc-6TEq96r4SVtwQqjRjYyzwl43_Ls25XoqZquXBAr7dmoSobEjFv4lbjm6PHP1vkB6Pruki8CZwLGHbhETl2jDZtI3YvdY68q_Ocm3SiiEcUjNETSY49BMXiPpI3yNGwbW70QrXmxTxqf1gwovEVwTIpPUF6j"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              <div className="absolute bottom-6 right-6 glass-effect p-4 rounded-lg border border-white/30">
                <p className="text-sm font-bold text-primary font-headline">5+ Strategic Locations</p>
                <p className="text-[11px] text-primary/80">Across Dubai &amp; UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
