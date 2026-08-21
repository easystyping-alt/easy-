"use client";

import { useState, useEffect } from "react";
import { supabaseAnon } from "@/lib/supabase";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const defaultJobs = [
    {
      title: "PRO Liaison Specialist",
      dept: "Government Relations",
      type: "Full-Time",
      loc: " Sheikh Zayed Road, Dubai",
      exp: "3+ Years in UAE",
      desc: "We are seeking an experienced PRO Specialist with deep connections to the DED, Amer, Tas-heel, and MOHRE. Must possess a valid UAE driver's license and speak Arabic and English fluently.",
    },
    {
      title: "Senior Legal Translator",
      dept: "Translations & Legal",
      type: "Full-Time",
      loc: "Al Quoz Branch, Dubai",
      exp: "4+ Years in Legal Translating",
      desc: "Seeking a certified Legal Translator to translate commercial, legal, and government contracts between English and Arabic. Attention to details and MOJ accreditation is a plus.",
    },
    {
      title: "Customer Service Associate",
      dept: "Front Office & Operations",
      type: "Full-Time",
      loc: "Grand Hyper Branch, Jabel Ali",
      exp: "1-2 Years",
      desc: "Act as our digital concierge. Welcome clients, verify documentation requirements, handle typing queues for Emirates ID and Medical services, and resolve customer queries professionally.",
    },
  ];

  useEffect(() => {
    async function loadJobs() {
      try {
        const { data, error } = await supabaseAnon
          .from("jobs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setJobs(data || []);
      } catch (err) {
        console.warn("Failed to load jobs from Supabase.", err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      alert("Application submitted successfully! Our HR team will review your CV and reach out.");
    }, 1200);
  };

  return (
    <div className="max-w-container-max mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-12 text-center lg:text-left space-y-4">
        <h1 className="font-headline font-bold text-4xl md:text-5xl text-primary">Careers at Easy Support</h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Join a leading team of corporate consultants and PRO facilitators. We offer competitive growth packages, institutional stability, and a modern work environment.
        </p>
      </section>

      {/* Workplace Culture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: "handshake", title: "Stability & Trust", desc: "Work with one of Dubai's oldest and most reliable government liaison services." },
          { icon: "trending_up", title: "Career Growth", desc: "Clear career pathways from junior typists to corporate advisory consultants." },
          { icon: "diversity_3", title: "Diverse Team", desc: "Collaborate with legal experts, PRO specialists, and translators of multiple nationalities." },
        ].map((item, idx) => (
          <div key={idx} className="bg-surface-container-low border border-border-light rounded-xl p-6 space-y-4">
            <span className="material-symbols-outlined text-secondary text-4xl">{item.icon}</span>
            <h3 className="font-headline text-lg font-bold text-primary">{item.title}</h3>
            <p className="font-sans text-sm text-text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Current Job Openings */}
      <section className="space-y-6">
        <h2 className="font-headline text-2xl font-bold text-primary border-b border-border-light pb-4">
          Current Openings ({loading ? "..." : jobs.length})
        </h2>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-text-muted">Loading available roles...</p>
          </div>
        ) : (
            jobs.length === 0 ? (
              <div className="text-center py-16 bg-surface-container-low rounded-2xl border border-border-light space-y-3 animate-fade-in">
                <span className="material-symbols-outlined text-text-muted text-5xl">work</span>
                <h4 className="font-headline font-semibold text-primary text-base">No open positions at the moment</h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">Check back later or visit our office to submit a general application query.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-surface-container-lowest border border-border-light rounded-xl p-6 md:p-8 hover:border-secondary hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  >
                    <div className="space-y-3 max-w-2xl">
                      <span className="inline-block px-3 py-1 bg-secondary-fixed text-primary font-mono text-xs font-semibold rounded-full">
                        {job.dept}
                      </span>
                      <h3 className="font-headline text-xl font-bold text-primary">{job.title}</h3>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{job.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs font-mono text-text-muted pt-2 font-semibold">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">location_on</span> {job.loc}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">verified</span> {job.exp}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job.title)}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 text-sm shrink-0 w-full md:w-auto text-center"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            )
        )}
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative border border-border-light max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h3 className="font-headline text-xl font-bold text-primary mb-2">Apply for Position</h3>
            <p className="font-mono text-xs font-semibold text-secondary mb-6">{selectedJob}</p>

            <form onSubmit={handleApply} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+971 50 000 0000"
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Upload Resume / CV Link
                </label>
                <input
                  required
                  type="text"
                  placeholder="Link to PDF or Google Drive resume"
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                  Cover Letter / Brief Intro
                </label>
                <textarea
                  rows={3}
                  placeholder="Why are you a good fit for this role?"
                  className="w-full bg-surface-container-low border border-border-light rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 text-sm flex items-center justify-center gap-2 mt-4"
              >
                <span className="material-symbols-outlined text-lg">
                  {submitted ? "sync" : "send"}
                </span>
                {submitted ? "Submitting application..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
