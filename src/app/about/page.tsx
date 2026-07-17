"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const sectionsRef = useRef<HTMLDivElement>(null);

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

    const sections = sectionsRef.current?.querySelectorAll(".scroll-section");
    sections?.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections?.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div ref={sectionsRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 bg-surface-bright hero-pattern">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed font-mono text-xs font-semibold rounded-full tracking-wider uppercase">
                Our Identity
              </span>
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Gateway to All <br /> Government Transactions
              </h1>
              <p className="text-body-lg text-text-muted max-w-xl leading-relaxed">
                EASY SUPPORT TYPING SERVICE is a leading business
                setup and PRO services provider in Dubai. Operating
                with great vision and passion, we are committed to
                customer satisfaction. Our experienced team is familiar
                with all government departments, and we serve
                companies in a wide range of industries. Our team
                provides services in a timely and efficient manner.
              </p>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="A high-angle cinematic photograph of the Dubai skyline with the Burj Khalifa"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvOH10I7XTGuSObm1WNRzoXcvs_1lZxsXz-rT_y2QVUeGpHxVbDP5Cef4QhETMfULaCxc50aJalnqAB81B6Lyk9TRSbu40U9d_NutUVP7Xl2pY50aRhf6ZtTZGJOlZhIWFRISA77Ro5qB9v8eTS0TZQy5kWznIUE4lSIpVuI7JRvqLgHzzI0Tx1atQ7dt6epN3fH9jIBJuPiVvQrLA5xDbFytyEYyf7ag4cFNs_SNGmCYqETXgr6l2Y2CM4i1rRE7TghPuW9DYLS05"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-20 bg-white">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border-light">
                    <img
                      className="w-full aspect-square object-cover"
                      alt="Business consultation in a luxury corporate setting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoqM7rhumUYwMGqyGUJrOZknIHnHaeV_BwZwsSagMyqTCZ0g0EBMowS7_R5e5EEv1UhrNKm1hEDRWUpepoOy0guF9FxwUp_S4DqGEdmTaaJX9Vg6uippGFWIshukmgT0xxefrqP6PFPRzn9d3PK3ZYxBMhaomg7KSxHENgWKvBiJBpQru4cIh3_IT6j1GGn924YfBXl8Ym5KERvWFHPVkA7JErYXPktTwUjcnqZEr-U7Gc4eo_ST7tqrohMOFf0-rEKWCWF0fCbfcd"
                    />
                  </div>
                  <div className="p-6 bg-surface-soft-blue rounded-xl border border-border-light text-center">
                    <div className="text-4xl font-headline font-bold text-primary mb-1">15+</div>
                    <div className="text-xs font-mono font-medium text-text-muted uppercase tracking-wider">Years Experience</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-primary text-on-primary rounded-xl text-center">
                    <div className="text-4xl font-headline font-bold mb-1">5k+</div>
                    <div className="text-xs font-mono font-medium uppercase tracking-wider opacity-85">Clients Served</div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border-light">
                    <img
                      className="w-full aspect-[4/5] object-cover"
                      alt="Smiling corporate business consultant in a modern lobby"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNkJ1jjjyb7ST-G8uDZ0BiImu76Xl8Lf1zuq0laZ6r_OG6tVRbd114owjFk23GX41AYkGZcQxHj_aUhaSnGt_O1CT3rTfvQtkGsaOBmobLrlQtQGcFdJ3dmmhXlkn9UxEJPe_FL9RBqRkNVmXBGJBk40CB9ZQK2hKxzTnasXBUOoywka1ZRGu0-EosHDtipBrkFcHGo-aCce5oVghF3di4WLAM0qXjPLqdKTqPlkDlxVHNpSrV0znAvMwcPWFYvXZWGKePAgnKGD1z"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold text-primary">About Our Excellence</h2>
                <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Operating with great vision and passion, we are committed to customer satisfaction. Our experienced team is familiar with all government departments, and we serve companies in a wide range of industries. Our team provides services in a timely and efficient manner.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2.5 rounded-lg">verified</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-headline">Institutional Stability</h4>
                    <p className="text-on-surface-variant text-xs mt-0.5">Deeply rooted in the UAE&apos;s administrative ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2.5 rounded-lg">speed</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-headline">Premium Efficiency</h4>
                    <p className="text-on-surface-variant text-xs mt-0.5">Navigating complex workflows with unmatched speed and precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-20 bg-surface-soft-blue">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Mission */}
            <div className="md:col-span-8 bg-primary text-on-primary p-12 rounded-3xl relative overflow-hidden group shadow-xl flex flex-col justify-center">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    flight_takeoff
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="font-sans text-body-lg opacity-90 max-w-2xl leading-relaxed">
                  To provide wings to the dreams of budding entrepreneurs and let them fly high in the Middle East by navigating the complexities of business setup with ease and expertise.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none">
                <span className="material-symbols-outlined text-[260px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  rocket_launch
                </span>
              </div>
            </div>

            {/* Team Mini Card */}
            <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-border-light shadow-sm flex flex-col justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-secondary text-5xl select-none">group</span>
              <div className="font-headline font-bold text-xl text-primary">Expert Team</div>
              <p className="text-text-muted text-xs px-4 leading-relaxed">
                Our professionals are highly specialized in UAE labour, immigration, and corporate laws.
              </p>
            </div>

            {/* Vision */}
            <div className="md:col-span-5 bg-secondary text-on-primary p-10 rounded-3xl relative overflow-hidden group shadow-lg flex flex-col justify-center">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                  <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="font-sans text-sm opacity-90 leading-relaxed">
                  To be the best in business consultancy that hands out the best-in-class results to our prestigious clients through innovation and commitment.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-15 group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_objects
                </span>
              </div>
            </div>

            {/* Philosophy */}
            <div className="md:col-span-7 bg-white p-10 rounded-3xl border border-border-light shadow-lg flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                  <h3 className="font-headline text-xl font-bold text-primary">Our Philosophy</h3>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed italic border-l-4 border-secondary/40 pl-4">
                  &quot;We aim to transform or upgrade the life of our customers who seek our services. With a team that is constantly striving to stay updated and be the best, we ensure that all that we offer is fault-proof.&quot;
                </p>
              </div>
              <div className="w-24 h-24 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 select-none">
                <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-20 bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 space-y-12">
          {/* Card 1: Abdul Hakkim */}
          <div className="bg-surface-bright rounded-[40px] p-8 md:p-16 border border-border-light relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
              <span className="material-symbols-outlined text-[240px]">handshake</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 relative shrink-0">
                <div className="aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-surface-dim">
                  <img
                    className="w-full h-full object-cover"
                    alt="Abdul Hakkim Portrait"
                    src="/images/abdul_hakim.png"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 -z-0 rounded-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-0"></div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary">A Message from Our Leadership</h2>
                <div className="h-1 w-20 bg-secondary"></div>
                <div className="space-y-4 text-on-surface-variant font-sans text-body-md leading-relaxed italic relative">
                  <span className="material-symbols-outlined text-secondary/20 text-7xl absolute -top-10 -left-6 pointer-events-none select-none">
                    format_quote
                  </span>
                  <p className="relative z-10">
                    At Easy Support, we believe every successful business begins with the right guidance and dependable support. For over 8 years, our commitment has been to simplify UAE business and government processes with integrity, professionalism, and excellence. Your success is our greatest achievement, and we are honored to be your trusted partner in every step of your journey.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-bold text-primary text-lg font-headline">Abdul hakkim</h4>
                  <p className="text-secondary font-medium text-sm">CEO & Managing Director</p>
                  <p className="text-on-surface-variant opacity-70 text-xs">Easy Support Typing Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Rashid.V */}
          <div className="bg-surface-bright rounded-[40px] p-8 md:p-16 border border-border-light relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
              <span className="material-symbols-outlined text-[240px]">handshake</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 relative shrink-0">
                <div className="aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-surface-dim">
                  <img
                    className="w-full h-full object-cover"
                    alt="Rashid.V Portrait"
                    src="/images/rashid.png"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 -z-0 rounded-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-0"></div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary">A Message from Our Leadership</h2>
                <div className="h-1 w-20 bg-secondary"></div>
                <div className="space-y-4 text-on-surface-variant font-sans text-body-md leading-relaxed italic relative">
                  <span className="material-symbols-outlined text-secondary/20 text-7xl absolute -top-10 -left-6 pointer-events-none select-none">
                    format_quote
                  </span>
                  <p className="relative z-10">
                    Success in business starts with confidence, and confidence comes from having the right partner. At Easy Support, we are committed to providing reliable PRO and business setup services that empower entrepreneurs and businesses to grow with peace of mind. We don&apos;t just process documents—we build long-term relationships based on trust, quality, and commitment.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-bold text-primary text-lg font-headline">Rashid.V</h4>
                  <p className="text-secondary font-medium text-sm">CEO & Managing Partner</p>
                  <p className="text-on-surface-variant opacity-70 text-xs">Easy Support Typing Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="scroll-section opacity-0 translate-y-8 transition-all duration-1000 py-20 bg-surface-soft-blue">
        <div className="max-w-container-max mx-auto px-6">
          <div className="bg-primary-container rounded-3xl p-12 text-center text-on-primary-container relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="font-headline font-bold text-3xl md:text-5xl max-w-3xl mx-auto text-white">
                Ready to Start Your Dubai Journey?
              </h2>
              <p className="font-sans text-body-lg opacity-85 max-w-xl mx-auto text-white/95">
                Let our expert facilitators handle the paperwork while you build your legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/calculator"
                  className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Get a Quote <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a
                  href="tel:+97140000000"
                  className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">call</span> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
