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
      icon: "badge",
      bgColor: "bg-primary-container",
      textColor: "text-on-primary-container",
      href: "/contact?service=amer",
    },
    {
      title: "Tasheel",
      desc: "MOHRE labor contracts, work permits, and employment related government paperwork.",
      icon: "work",
      bgColor: "bg-secondary-container",
      textColor: "text-on-secondary-container",
      href: "/contact?service=tasheel",
    },
    {
      title: "Tawjeeh",
      desc: "Labour awareness training, employer-employee guidance, and legal orientation.",
      icon: "school",
      bgColor: "bg-tertiary-fixed",
      textColor: "text-on-tertiary-fixed",
      href: "/contact?service=tawjeeh",
    },
    {
      title: "Tadbeer",
      desc: "Recruitment and placement services for domestic and household workers.",
      icon: "home",
      bgColor: "bg-primary-fixed",
      textColor: "text-on-primary-fixed",
      href: "/contact?service=tadbeer",
    },
    {
      title: "Emirates ID",
      desc: "Biometric registration, renewal, and replacement of Emirates Identity Cards.",
      icon: "id_card",
      bgColor: "bg-surface-container",
      textColor: "text-primary",
      href: "/contact?service=emiratesid",
    },
    {
      title: "Medical Services",
      desc: "Visa medical fitness tests coordination with DHA and MOH authorities.",
      icon: "medical_services",
      bgColor: "bg-error-container",
      textColor: "text-on-error-container",
      href: "/contact?service=medical",
    },
    {
      title: "RTA Services",
      desc: "Vehicle registration, driving license renewal, and fine payments.",
      icon: "directions_car",
      bgColor: "bg-on-secondary-fixed",
      textColor: "text-secondary-fixed",
      href: "/contact?service=rta",
    },
    {
      title: "Dubai Chamber",
      desc: "Company registration, certificates of origin, and membership renewals.",
      icon: "account_balance",
      bgColor: "bg-secondary-fixed-dim",
      textColor: "text-on-secondary-fixed",
      href: "/contact?service=chamber",
    },
    {
      title: "Dubai Municipality",
      desc: "Health permits, food safety certifications, and trade license approvals.",
      icon: "location_city",
      bgColor: "bg-primary-container",
      textColor: "text-on-primary-container",
      href: "/contact?service=municipality",
    },
    {
      title: "Dubai Customs",
      desc: "Client code registration, import/export permits, and customs clearance.",
      icon: "inventory",
      bgColor: "bg-on-tertiary-fixed",
      textColor: "text-tertiary-fixed",
      href: "/contact?service=customs",
    },
    {
      title: "Notary Services",
      desc: "MOA attestation, power of attorney, and legal document verification.",
      icon: "gavel",
      bgColor: "bg-secondary",
      textColor: "text-on-secondary",
      href: "/contact?service=notary",
    },
    {
      title: "Translation",
      desc: "Legal translation of documents from all languages to Arabic/English.",
      icon: "translate",
      bgColor: "bg-on-primary-container",
      textColor: "text-primary-container",
      href: "/contact?service=translation",
    },
    {
      title: "Attestation",
      desc: "MOFA, Educational, and Personal document attestation services.",
      icon: "verified",
      bgColor: "bg-surface-container-high",
      textColor: "text-primary",
      href: "/contact?service=attestation",
    },
    {
      title: "Trademark & ISO",
      desc: "Brand protection, logo registration, and ISO quality standard audits.",
      icon: "copyright",
      bgColor: "bg-tertiary-container",
      textColor: "text-on-tertiary-container",
      href: "/contact?service=trademark",
    },
    {
      title: "Accounting",
      desc: "VAT registration, auditing, bookkeeping, and financial statement reports.",
      icon: "account_balance_wallet",
      bgColor: "bg-primary-fixed-dim",
      textColor: "text-on-primary-fixed",
      href: "/contact?service=accounting",
    },
    {
      title: "Travel & Tourism",
      desc: "Tourist visas, air ticketing, hotel booking, and holiday packages.",
      icon: "flight_takeoff",
      bgColor: "bg-secondary-fixed",
      textColor: "text-on-secondary-fixed",
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
              className="service-card opacity-0 translate-y-8 transition-all duration-700 bg-surface-container-lowest border border-border-light p-6 md:p-8 rounded-xl hover:border-secondary hover:shadow-[0_20px_40px_-15px_rgba(35,74,156,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center ${service.textColor} mb-6 transition-transform hover:scale-110`}>
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-text-muted mb-6 leading-relaxed">{service.desc}</p>
              </div>
              <Link
                href={service.href}
                className="text-secondary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto"
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
