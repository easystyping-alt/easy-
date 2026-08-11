"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  category: "visa" | "government" | "corporate" | "travel";
  categoryLabel: string;
  image: string;
  logo: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "amer",
    title: "Amer Services",
    category: "visa",
    categoryLabel: "Visa & Immigration",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/amer-seeklogo.png",
  },
  {
    id: "tasheel",
    title: "Tasheel Services",
    category: "visa",
    categoryLabel: "Labour & MOHRE",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/tas-heel-dubai-uae-seeklogo.png",
  },
  {
    id: "tawjeeh",
    title: "Tawjeeh Services",
    category: "visa",
    categoryLabel: "Labour & Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dubai-government-human-resources-dept-dghr-logo-png_seeklogo-365674.png",
  },
  {
    id: "tadbeer",
    title: "Tadbeer Services",
    category: "visa",
    categoryLabel: "Domestic Workers",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/government-of-dubai-seeklogo.png",
  },
  {
    id: "emiratesid",
    title: "Emirates ID (ICP)",
    category: "visa",
    categoryLabel: "Identity & Citizenship",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/uaeicp-federal-authority-for-identity-citizenshi-seeklogo.png",
  },
  {
    id: "medical",
    title: "Visa Medical Fitness",
    category: "visa",
    categoryLabel: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dha-medical-education-department-logo.png",
  },
  {
    id: "rta",
    title: "RTA Services",
    category: "government",
    categoryLabel: "Transport & Licensing",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dubai-roads-transport-authority-seeklogo.png",
  },
  {
    id: "chamber",
    title: "Dubai Chamber",
    category: "government",
    categoryLabel: "Commerce & Trade",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dubai-economy-and-tourism-seeklogo.png",
  },
  {
    id: "municipality",
    title: "Dubai Municipality",
    category: "government",
    categoryLabel: "Permits & Approvals",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dubai-municipality-seeklogo.png",
  },
  {
    id: "customs",
    title: "Dubai Customs",
    category: "government",
    categoryLabel: "Import & Export",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/United Arab Emirates Vector Logo.jpg",
  },
  {
    id: "notary",
    title: "Notary Public & Courts",
    category: "corporate",
    categoryLabel: "Legal & Notary",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/429-4297405_high-resolution-low-resolution-dubai-courts-logo.png",
  },
  {
    id: "translation",
    title: "Legal Translation",
    category: "corporate",
    categoryLabel: "Ministry Approved",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/government-of-dubai-seeklogo.png",
  },
  {
    id: "attestation",
    title: "Document Attestation",
    category: "corporate",
    categoryLabel: "MOFA & Embassies",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/United Arab Emirates Vector Logo.jpg",
  },
  {
    id: "trademark",
    title: "Trademark & ISO Certification",
    category: "corporate",
    categoryLabel: "Brand & Standards",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/department-of-economic-development-logo.png",
  },
  {
    id: "accounting",
    title: "Accounting & Corporate Tax",
    category: "corporate",
    categoryLabel: "Tax & Compliance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/department-of-economic-development-logo.png",
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    category: "travel",
    categoryLabel: "Visas & Holidays",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/dubai-economy-and-tourism-seeklogo.png",
  },
];

const branchesData = [
  {
    name: "Branch 1 - Al Quoz Ind 2",
    tag: "Flagship Branch",
    desc: "Inside Pasons 17 Hypermarket, Al Qouz ind 2, 1st Floor",
    phone: "+971 4 320 6051",
    timings: "Sat - Thu: 8:00 AM - 9:00 PM | Fri: 4:00 PM - 9:00 PM",
    link: "https://www.google.com/maps/dir//EASY+SUPPORT+TYPING+SERVICES+-+Al+Qouz+Ind.second+-+Dubai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f6918524fb3fb:0x23f964e1543e9a00?sa=X&ved=1t:57443&ictx=111",
    query: "EASY SUPPORT TYPING SERVICES - Al Qouz Ind.second - Dubai",
  },
  {
    name: "Branch 2 - Jebel Ali Ind 1",
    tag: "Industrial Zone Support",
    desc: "Inside Grand Hypermarket, Jebel Ali ind 1, First al khail street",
    phone: "+971 4 320 6051",
    timings: "Sat - Thu: 8:00 AM - 9:00 PM | Fri: 4:00 PM - 9:00 PM",
    link: "https://www.google.com/maps/dir//Easy+Support+Typing+Services+Branch+2+-+Jebel+Ali+Industrial+Area+-+Dubai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f132cb83f9169:0xb219a1a843f804a4?sa=X&ved=1t:57443&ictx=111",
    query: "Easy Support Typing Services Branch 2 - Jebel Ali Industrial Area - Dubai",
  },
  {
    name: "Branch 3 - Najmat Al Madeena",
    tag: "Retail & Community Desk",
    desc: "Inside Najmat Al Madeena Supermarket, Dubai",
    phone: "+971 4 320 6051",
    timings: "Sat - Thu: 8:30 AM - 9:30 PM | Fri: 4:30 PM - 9:30 PM",
    link: "https://www.google.com/search?q=najmat+al+madeena+super+market+dubai",
    query: "Najmat Al Madeena Supermarket Dubai",
  },
  {
    name: "Branch 4 - Al Marabea St",
    tag: "Commercial Center",
    desc: "EASY SUPPORT inside Azhar al madeena Hypermarket, Al Qouz Ind 4",
    phone: "+971 4 320 6051",
    timings: "Sat - Thu: 8:00 AM - 9:00 PM | Fri: 4:00 PM - 9:00 PM",
    link: "https://www.google.com/maps/dir//Easy+Support+Typing+Services-+Branch+4+-+Al+Marabea'+St+-+Al+Qouz+Ind.fourth+-+Dubai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f69e6d831cc75:0xb504e98372590c81?sa=X&ved=1t:57443&ictx=111",
    query: "Easy Support Typing Services - Branch 4 - Al Marabea' St - Al Qouz Ind.fourth - Dubai",
  },
  {
    name: "Branch 5 - DIP 1",
    tag: "Investment Park Hub",
    desc: "Inside The parks shopping center, DIP-1, Dubai",
    phone: "+971 4 320 6051",
    timings: "Sat - Thu: 8:30 AM - 9:00 PM | Fri: 4:00 PM - 9:00 PM",
    link: "https://www.google.com/maps/dir//EASY+SUPPORT+TYPING+SERVICES+-+DIP+1+-+1+-+Dubai+Investment+Park+-+Dubai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f73f67f59f72b:0x3158fd1c11c9e05b?sa=X&ved=1t:57443&ictx=111",
    query: "EASY SUPPORT TYPING SERVICES - DIP 1 - 1 - Dubai Investment Park - Dubai",
  },
];

const faqs = [
  {
    q: "How fast can you process a Dubai residency or family visa?",
    a: "Standard residency visa processing normally takes 3-5 business days. With our VIP express lane assistance, entry permits and medical test results can be expedited within 24 to 48 hours.",
  },
  {
    q: "Do I need to visit government departments in person?",
    a: "In most cases, no! As registered PRO specialists, we submit applications, pay government fees, and liaise with authorities digitally on your behalf. You only need to appear in person for physical biometric capture and medical blood screening.",
  },
  {
    q: "Can you assist with Golden Visa nomination and paperwork?",
    a: "Yes. We manage end-to-end UAE Golden Visa applications for investors, real estate owners, skilled professionals, executive leaders, and specialized talents through GDRFA and ICP channels.",
  },
  {
    q: "What documents do I need for legal translation and MOFA attestation?",
    a: "You need the original document (e.g. birth certificate, marriage certificate, educational diploma) and your passport copy. Our team handles notary verification, Ministry of Justice certified translation, and MOFA online stamping seamlessly.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "visa" | "government" | "corporate" | "travel">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchesCategory = activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-black text-white pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Background Image with High Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000"
            alt="Dubai Skyline Corporate Backdrop"
            src="/images/services_hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]">
              Seamless Government <br />
              <span className="text-secondary-container font-headline">Solutions in Dubai.</span>
            </h1>

            <p className="font-sans text-body-lg text-white/90 leading-relaxed max-w-2xl">
              We navigate the complexities of UAE government procedures so you don&apos;t have to. From Amer &amp; Tasheel visa processing to corporate DED compliance, our certified specialists ensure swift, hassle-free approvals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-primary text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/30"
              >
                <span>Book Consultation</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <a
                href="#branches"
                className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/25 transition-all active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                <span>Our 5 Branches</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
              <div>
                <div className="text-2xl font-bold font-headline text-white">15+</div>
                <div className="text-xs text-white/70">Years of Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-headline text-white">16+</div>
                <div className="text-xs text-white/70">Govt Departments</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-headline text-white">5</div>
                <div className="text-xs text-white/70">Branches in Dubai</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-headline text-emerald-400">99.8%</div>
                <div className="text-xs text-white/70">Approval Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Explorer Section */}
      <section className="py-14 md:py-20 px-6 max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-12 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase font-bold">
            <span className="w-6 h-[2px] bg-secondary"></span> Official Services <span className="w-6 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Our Government &amp; Business Services
          </h2>
          <p className="font-sans text-body-md text-text-muted">
            Select any service below to get instant assistance, document processing, and expert consultation.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-border-light mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-medium"
                }`}
              >
                All Services ({servicesData.length})
              </button>
              <button
                onClick={() => setActiveTab("visa")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "visa"
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-medium"
                }`}
              >
                Visa &amp; Immigration
              </button>
              <button
                onClick={() => setActiveTab("government")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "government"
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-medium"
                }`}
              >
                Govt Authorities
              </button>
              <button
                onClick={() => setActiveTab("corporate")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "corporate"
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-medium"
                }`}
              >
                Corporate &amp; Legal
              </button>
              <button
                onClick={() => setActiveTab("travel")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "travel"
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-medium"
                }`}
              >
                Travel &amp; Tourism
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-border-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-on-surface text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Cards Grid - Distinct Full Image Cards with Service Name & Logo Only */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-border-light space-y-3">
            <span className="material-symbols-outlined text-4xl text-text-muted">search_off</span>
            <h3 className="font-headline font-bold text-lg text-primary">No matching services found</h3>
            <p className="text-sm text-text-muted">Try typing a different name or select another category tab.</p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-2 text-xs font-bold text-secondary underline hover:text-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                href={`/contact?service=${service.id}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[300px] md:h-[320px] border border-white/10 hover:-translate-y-1.5"
              >
                {/* Full-bleed background image unique to each service */}
                <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Rich Gradient Overlay for strong text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:via-black/70 transition-all duration-500"></div>
                </div>

                {/* Top Badge: Category & Official Logo */}
                <div className="relative z-10 p-5 flex items-start justify-between">
                  {/* Logo Container in frosted white badge */}
                  <div className="w-13 h-13 bg-white/95 p-2 rounded-xl flex items-center justify-center shadow-lg border border-white/40 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Bottom Content: Service Name & Enquire Arrow Action */}
                <div className="relative z-10 p-5 pt-0 space-y-2">
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-white group-hover:text-secondary-container transition-colors duration-300 drop-shadow-md">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-secondary-container text-xs font-semibold pt-1 transition-all duration-300 group-hover:translate-x-1">
                    <span>Enquire Now</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Step-by-Step Working Process */}
      <section className="py-16 md:py-20 bg-surface-soft-blue border-y border-border-light">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase font-bold">
              <span className="w-6 h-[2px] bg-secondary"></span> Effortless Workflow <span className="w-6 h-[2px] bg-secondary"></span>
            </div>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">
              How We Process Your Transactions
            </h2>
            <p className="text-text-muted text-sm">
              A transparent, high-speed 4-step framework designed to eliminate delays and guarantee compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-border-light shadow-sm relative group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-headline font-bold text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="font-headline font-bold text-base text-primary mb-2">
                Document Assessment
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We review your paperwork, verify eligibility with government requirements, and advise on optimal processing tracks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border-light shadow-sm relative group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-headline font-bold text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="font-headline font-bold text-base text-primary mb-2">
                Filing &amp; Government Liaison
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Direct submission via official GDRFA, MOHRE, ICP, and DED digital portals with VIP priority queuing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border-light shadow-sm relative group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-headline font-bold text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="font-headline font-bold text-base text-primary mb-2">
                Biometrics &amp; Tests Support
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We schedule and escort medical fitness tests, biometric appointments, and legal notary sessions seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border-light shadow-sm relative group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-headline font-bold text-xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="font-headline font-bold text-base text-primary mb-2">
                Approval &amp; Stamped Delivery
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Instant delivery of digital residency permits, Emirates ID tracking, stamped trade licenses, and certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Network Section */}
      <section id="branches" className="py-16 md:py-24 px-6 max-w-container-max mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase font-bold">
            <span className="w-6 h-[2px] bg-secondary"></span> Strategic Dubai Locations <span className="w-6 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">
            Visit Any of Our 5 Convenient Branches
          </h2>
          <p className="text-text-muted text-sm">
            Located across major industrial, commercial, and retail centers in Dubai for rapid walk-in support.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Branch Selection List */}
          <div className="w-full lg:w-1/2 space-y-3">
            {branchesData.map((branch, bidx) => (
              <div
                key={bidx}
                onClick={() => setActiveBranch(bidx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                  activeBranch === bidx
                    ? "bg-white border-primary shadow-md ring-1 ring-primary/20"
                    : "bg-surface-container-low border-border-light hover:bg-white hover:border-outline-variant"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className={`material-symbols-outlined select-none p-2 rounded-lg text-lg transition-colors ${
                        activeBranch === bidx
                          ? "bg-primary text-white"
                          : "bg-surface-container-high text-secondary"
                      }`}
                    >
                      location_on
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className={`font-bold font-headline text-sm md:text-base ${activeBranch === bidx ? "text-primary" : "text-on-surface"}`}>
                          {branch.name}
                        </p>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-secondary/10 text-secondary">
                          {branch.tag}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">{branch.desc}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-text-muted pt-1">
                        <span className="flex items-center gap-1 text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-[13px] text-primary">schedule</span>
                          {branch.timings}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={branch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary py-1.5 px-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 shrink-0 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="material-symbols-outlined text-[15px]">directions</span>
                    <span className="hidden sm:inline">Directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map Preview Panel */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-border-light bg-white flex flex-col min-h-[420px]">
            <div className="bg-primary px-5 py-3.5 text-white flex justify-between items-center shrink-0">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-secondary-container font-bold">Interactive Location</span>
                <p className="font-headline font-bold text-sm text-white">{branchesData[activeBranch].name}</p>
              </div>
              <a
                href={branchesData[activeBranch].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white text-primary px-3 py-1.5 rounded-lg font-bold hover:bg-white/90 flex items-center gap-1 transition-all"
              >
                <span>Open in Google Maps</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>

            <div className="flex-grow w-full h-full relative min-h-[360px]">
              <iframe
                title={`${branchesData[activeBranch].name} Map`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branchesData[activeBranch].query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20 bg-white border-t border-border-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase font-bold">
              <span className="w-6 h-[2px] bg-secondary"></span> FAQs <span className="w-6 h-[2px] bg-secondary"></span>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-xs md:text-sm">
              Quick answers about procedures, processing times, and government compliance in Dubai.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border-light rounded-xl overflow-hidden transition-all duration-200 bg-surface-container-lowest"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 md:p-5 text-left font-headline font-bold text-sm md:text-base text-primary flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 md:px-5 pb-5 pt-1 text-xs md:text-sm text-text-muted leading-relaxed border-t border-border-light/60 bg-surface-container-low/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA */}
      <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-secondary-container">
            ⚡ Quick Turnaround &amp; 100% Guaranteed Compliance
          </div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
            Ready to Process Your Government Documents?
          </h2>
          <p className="font-sans text-body-lg text-white/85 max-w-xl mx-auto leading-relaxed">
            Speak directly with our senior corporate facilitators or walk into any of our 5 branches in Dubai today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary-container transition-all active:scale-95 shadow-lg"
              href="tel:+97143206051"
            >
              <span className="material-symbols-outlined">call</span> Call +971 4 320 6051
            </a>
            <a
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all active:scale-95 shadow-lg"
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp Chat
            </a>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-95 shadow-lg"
            >
              <span>Submit Inquiry</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
