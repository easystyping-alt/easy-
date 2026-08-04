"use client";

import { useState, useEffect } from "react";
import { supabaseAnon } from "@/lib/supabase";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const defaultGalleryItems = [
    {
      id: 1,
      category: "offices",
      title: "Dubai Sheikh Zayed Road Head Office",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5AOV-tdQpbwbwQXMt8caZz020GQedLcJezbP-5N4j-st37EfmiQjMs7ZOMtyVcl673ckr8qPQDZcSohkPDamqKNdLzv4tjrUIkRbU7ep1zGIBDkejKRWwgnNciX6jdJ8qEuHfe3WwF9dHBrIruJpL3rLi_Gr1lckpti7lxgFmHiA39OOGfh-32NakKZDhoa8zGNWDK76BTqYiGPD3QDZe05TwAa2JGCq7Y4v4JcxZRwXdNLzQbpT_P75W0yVzVzH_2SPp1aI7TTkl",
    },
    {
      id: 2,
      category: "team",
      title: "Visionary MD & Leadership Team",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJmEJNTCwarYOqJIfeQgmf0q3m9fO_RcIZk4Oba-uqJ0RMU4ByZbGjXe-xZZnWbKDn5NRgXWvD-fPlTt2wVbvpO8xcuRmiI9Hvs7qbBFenO-0JkjDMb8KTu2GLopZ7RJXx4BXmVhl5Gi7Mwl2_gp6FQXllkjL2LtTxYKUjgFE8s84OCLmfZKUayG9gxqILG9mduUGnMRumenmkB5XDroV3aywtzpimlgPCiXiKXOlLDrfwOEff0Nn05O_WK2i922pB1qxD_EEc54OC",
    },
    {
      id: 3,
      category: "team",
      title: "Our Corporate Consultants Panel",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNkJ1jjjyb7ST-G8uDZ0BiImu76Xl8Lf1zuq0laZ6r_OG6tVRbd114owjFk23GX41AYkGZcQxHj_aUhaSnGt_O1CT3rTfvQtkGsaOBmobLrlQtQGcFdJ3dmmhXlkn9UxEJPe_FL9RBqRkNVmXBGJBk40CB9ZQK2hKxzTnasXBUOoywka1ZRGu0-EosHDtipBrkFcHGo-aCce5oVghF3di4WLAM0qXjPLqdKTqPlkDlxVHNpSrV0znAvMwcPWFYvXZWGKePAgnKGD1z",
    },
    {
      id: 4,
      category: "service",
      title: "Interactive Client Consultation",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoqM7rhumUYwMGqyGUJrOZknIHnHaeV_BwZwsSagMyqTCZ0g0EBMowS7_R5e5EEv1UhrNKm1hEDRWUpepoOy0guF9FxwUp_S4DqGEdmTaaJX9Vg6uippGFWIshukmgT0xxefrqP6PFPRzn9d3PK3ZYxBMhaomg7KSxHENgWKvBiJBpQru4cIh3_IT6j1GGn924YfBXl8Ym5KERvWFHPVkA7JErYXPktTwUjcnqZEr-U7Gc4eo_ST7tqrohMOFf0-rEKWCWF0fCbfcd",
    },
    {
      id: 5,
      category: "offices",
      title: "Dubai Skyline View from Office Lobby",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvOH10I7XTGuSObm1WNRzoXcvs_1lZxsXz-rT_y2QVUeGpHxVbDP5Cef4QhETMfULaCxc50aJalnqAB81B6Lyk9TRSbu40U9d_NutUVP7Xl2pY50aRhf6ZtTZGJOlZhIWFRISA77Ro5qB9v8eTS0TZQy5kWznIUE4lSIpVuI7JRvqLgHzzI0Tx1atQ7dt6epN3fH9jIBJuPiVvQrLA5xDbFytyEYyf7ag4cFNs_SNGmCYqETXgr6l2Y2CM4i1rRE7TghPuW9DYLS05",
    },
    {
      id: 6,
      category: "service",
      title: "Strategic Partner Handshake",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4AURzrn-q3Ht-mFbYDeyVMJEpoczJZTY7nOLIIEQo7mnArLuV71td4NpA_qWJD5j9iWEBDRAqr1ztLE8Wepn-WCUhlQC4svlBvGSAMBDndQUeOqz_Ymexq4PLH7TQKISIjQZNCCS_O7ePYtYA5XV69xVy2z8b5-ZnKNfqu4tFtC-nHrghojEc7xVmgKW4A0AqDSPCCyAMkZfhCKp_8m0LPC-rTU2HtbeL2TsTC9ek6lkuFa2KyaBMSKiwbrx6guUsAV9IOzSPTvsj",
    },
  ];

  useEffect(() => {
    async function loadGallery() {
      try {
        const { data, error } = await supabaseAnon
          .from("gallery")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setGallery(data);
        } else {
          setGallery(defaultGalleryItems);
        }
      } catch (err) {
        console.warn("Failed to load gallery from Supabase, using defaults.", err);
        setGallery(defaultGalleryItems);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  const filteredItems =
    filter === "all" ? gallery : gallery.filter((item) => item.category === filter);

  return (
    <div className="max-w-container-max mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-12 text-center lg:text-left space-y-4">
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary">Office Gallery</h1>
        <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Take a virtual tour of our offices across the UAE, see our professional team in action, and explore our operations.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 pb-4 border-b border-border-light">
        {[
          { key: "all", label: "All Photos" },
          { key: "offices", label: "Our Offices" },
          { key: "team", label: "Consultants & Team" },
          { key: "service", label: "Client Consultations" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 ${
              filter === tab.key
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-text-muted">Loading gallery...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.url)}
            className="group cursor-pointer bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-secondary border border-border-light transition-all flex flex-col justify-between"
          >
            <div className="overflow-hidden aspect-[4/3] bg-surface-dim relative">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl font-bold">zoom_in</span>
              </div>
            </div>
            <div className="p-5 border-t border-border-light bg-white">
              <h4 className="font-headline font-semibold text-primary text-sm line-clamp-1">{item.title}</h4>
              <p className="text-xs text-text-muted capitalize font-mono mt-1 font-semibold">
                Category: {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Lightroom Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-secondary-fixed transition-colors"
            aria-label="Close Preview"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg shadow-2xl relative bg-black">
            <img src={selectedImage} alt="Large High Fidelity Gallery Preview" className="w-auto h-auto max-h-[85vh] object-contain mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
