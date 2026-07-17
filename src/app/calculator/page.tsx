"use client";

import { useState, useEffect } from "react";

export default function Calculator() {
  // Inputs state
  const [businessType, setBusinessType] = useState("mainland");
  const [businessActivity, setBusinessActivity] = useState("commercial");
  const [officeRequirement, setOfficeRequirement] = useState("none");
  const [visaCount, setVisaCount] = useState(1);

  // Calculated costs state
  const [breakdown, setBreakdown] = useState({
    baseCost: 8000,
    typeCost: 5000,
    activityCost: 2500,
    officeCost: 0,
    visaCost: 3500,
    total: 19000,
  });

  const [pulse, setPulse] = useState(false);

  // Recalculate cost when inputs change
  useEffect(() => {
    let base = 8000;
    let typeCost = 0;
    let activityCost = 0;
    let officeCost = 0;

    // Business type
    if (businessType === "mainland") typeCost = 5000;
    else if (businessType === "freezone") typeCost = 3500;
    else if (businessType === "offshore") typeCost = 2000;

    // Activity type
    if (businessActivity === "commercial") activityCost = 2500;
    else if (businessActivity === "industrial") activityCost = 7000;
    else if (businessActivity === "ecommerce") activityCost = 1500;
    else if (businessActivity === "professional") activityCost = 0;

    // Office
    if (officeRequirement === "flexi") officeCost = 4500;
    else if (officeRequirement === "physical") officeCost = 15000;
    else if (officeRequirement === "none") officeCost = 0;

    // Visa
    const visaCost = visaCount * 3500;

    const total = base + typeCost + activityCost + officeCost + visaCost;

    setBreakdown({
      baseCost: base,
      typeCost,
      activityCost,
      officeCost,
      visaCost,
      total,
    });

    // Trigger pulse animation
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 300);
    return () => clearTimeout(timer);
  }, [businessType, businessActivity, officeRequirement, visaCount]);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! A corporate consultant will contact you shortly with your detailed breakdown.");
  };

  return (
    <div className="max-w-container-max mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-12 text-center lg:text-left space-y-4">
        <h1 className="font-headline font-bold text-4xl md:text-5xl text-primary">
          UAE Business Setup Cost Calculator
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Plan your journey with precision. Our interactive tool provides real-time estimates for licensing, visas, and office requirements across the UAE.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Calculator Main Section */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest border border-border-light rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Business Type */}
              <div className="space-y-2">
                <label className="block font-headline text-lg font-semibold text-primary" htmlFor="business-type">
                  Business Type
                </label>
                <select
                  id="business-type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer text-sm font-medium"
                >
                  <option value="mainland">Mainland (LLC)</option>
                  <option value="freezone">Free Zone</option>
                  <option value="offshore">Offshore</option>
                </select>
              </div>

              {/* Business Activity */}
              <div className="space-y-2">
                <label className="block font-headline text-lg font-semibold text-primary" htmlFor="business-activity">
                  Business Activity
                </label>
                <select
                  id="business-activity"
                  value={businessActivity}
                  onChange={(e) => setBusinessActivity(e.target.value)}
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer text-sm font-medium"
                >
                  <option value="commercial">Commercial / Trading</option>
                  <option value="professional">Professional / Services</option>
                  <option value="industrial">Industrial / Manufacturing</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>

              {/* Office Requirement */}
              <div className="space-y-3">
                <label className="block font-headline text-lg font-semibold text-primary">Office Requirement</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "none", label: "None / Virtual", icon: "not_interested" },
                    { value: "flexi", label: "Flexi-Desk", icon: "desk" },
                    { value: "physical", label: "Physical Office", icon: "corporate_fare" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-4 bg-surface-container-low rounded-lg cursor-pointer border-2 transition-all select-none ${
                        officeRequirement === option.value
                          ? "border-primary bg-primary-fixed/20 shadow-sm"
                          : "border-transparent hover:border-outline-variant"
                      }`}
                    >
                      <input
                        type="radio"
                        name="office"
                        value={option.value}
                        checked={officeRequirement === option.value}
                        onChange={() => setOfficeRequirement(option.value)}
                        className="hidden"
                      />
                      <span className="material-symbols-outlined text-primary">{option.icon}</span>
                      <span className="font-bold text-sm text-primary">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Visas Slider */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <label className="block font-headline text-lg font-semibold text-primary" htmlFor="visa-slider">
                    Number of Visas
                  </label>
                  <span className="text-xl font-headline font-bold text-white bg-primary px-4 py-1.5 rounded-lg select-none">
                    {visaCount}
                  </span>
                </div>
                <input
                  id="visa-slider"
                  type="range"
                  min="1"
                  max="20"
                  value={visaCount}
                  onChange={(e) => setVisaCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-light rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs font-mono font-semibold text-text-muted">
                  <span>1 Visa</span>
                  <span>20 Visas</span>
                </div>
              </div>
            </form>
          </div>

          {/* Results Display */}
          <div className="bg-primary text-on-primary rounded-2xl p-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none">
              <span className="material-symbols-outlined scale-[6]" style={{ fontVariationSettings: "'FILL' 1" }}>
                payments
              </span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1">
                <h3 className="font-headline font-semibold text-secondary-fixed text-lg uppercase tracking-wider">
                  Estimated Setup Cost
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white/90">AED</span>
                  <span
                    className={`text-5xl md:text-6xl font-headline font-bold leading-none text-white transition-all duration-300 ${
                      pulse ? "scale-105 text-secondary-container" : "scale-100"
                    }`}
                  >
                    {breakdown.total.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button
                  onClick={() => alert("Cost breakdown details sent to download manager.")}
                  className="w-full bg-secondary-container text-on-secondary-fixed px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all shadow-md active:scale-95 text-sm"
                >
                  <span className="material-symbols-outlined">description</span>
                  Download Full Breakdown
                </button>
              </div>
            </div>
          </div>

          {/* Details breakdown view */}
          <div className="bg-surface-container-low border border-border-light rounded-xl p-6 space-y-4">
            <h4 className="font-headline text-lg font-bold text-primary">Cost Breakdown Details</h4>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-on-surface-variant">Base Admin Fee</span>
                <span className="font-semibold text-primary">AED {breakdown.baseCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-on-surface-variant">License &amp; Legal Type ({businessType.toUpperCase()})</span>
                <span className="font-semibold text-primary">AED {breakdown.typeCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-on-surface-variant">Business Activity ({businessActivity.toUpperCase()})</span>
                <span className="font-semibold text-primary">AED {breakdown.activityCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-on-surface-variant">Office Facility ({officeRequirement.toUpperCase()})</span>
                <span className="font-semibold text-primary">AED {breakdown.officeCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-on-surface-variant">Residency Visas ({visaCount} Pax)</span>
                <span className="font-semibold text-primary">AED {breakdown.visaCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Detailed Quote Form */}
          <div className="bg-surface-container-highest rounded-2xl p-6 border border-border-light shadow-sm space-y-6">
            <h3 className="font-headline text-xl font-bold text-primary">Get a Detailed Quote</h3>
            <form onSubmit={handleSubmitQuote} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  required
                  className="w-full bg-white border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  className="w-full bg-white border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  required
                  className="w-full bg-white border border-border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+971 50 000 0000"
                  type="tel"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 shadow-md text-sm"
              >
                Contact an Expert
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border-light space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted font-sans">Call for inquiries</p>
                  <p className="font-bold text-primary font-headline text-sm">+971 4 320 6051</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted font-sans">Email Support</p>
                  <p className="font-bold text-primary font-headline text-sm">info@easysupport.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Card */}
          <div className="rounded-2xl overflow-hidden relative aspect-video shadow-lg group">
            <div
              className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5AOV-tdQpbwbwQXMt8caZz020GQedLcJezbP-5N4j-st37EfmiQjMs7ZOMtyVcl673ckr8qPQDZcSohkPDamqKNdLzv4tjrUIkRbU7ep1zGIBDkejKRWwgnNciX6jdJ8qEuHfe3WwF9dHBrIruJpL3rLi_Gr1lckpti7lxgFmHiA39OOGfh-32NakKZDhoa8zGNWDK76BTqYiGPD3QDZe05TwAa2JGCq7Y4v4JcxZRwXdNLzQbpT_P75W0yVzVzH_2SPp1aI7TTkl')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex items-end p-6">
              <p className="text-white font-headline font-semibold text-md leading-relaxed">
                Trusted by 5,000+ Businesses in the UAE
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
