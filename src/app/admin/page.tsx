"use client";

import { useState, useEffect } from "react";
import { supabaseAnon } from "@/lib/supabase";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"homepage" | "jobs" | "gallery" | "credentials">("homepage");

  // Login form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Homepage content state
  const [slide1Title, setSlide1Title] = useState("");
  const [slide1Desc, setSlide1Desc] = useState("");
  const [slide2Title, setSlide2Title] = useState("");
  const [slide2Desc, setSlide2Desc] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDesc, setAboutDesc] = useState("");
  const [homepageSuccess, setHomepageSuccess] = useState("");
  const [homepageError, setHomepageError] = useState("");
  const [savingHomepage, setSavingHomepage] = useState(false);

  // Homepage images state
  const [slide1Image, setSlide1Image] = useState("");
  const [slide2Image, setSlide2Image] = useState("");
  const [aboutImage, setAboutImage] = useState("");
  const [whyChooseImage, setWhyChooseImage] = useState("");

  const [uploadingSlide1, setUploadingSlide1] = useState(false);
  const [uploadingSlide2, setUploadingSlide2] = useState(false);
  const [uploadingAbout, setUploadingAbout] = useState(false);
  const [uploadingWhyChoose, setUploadingWhyChoose] = useState(false);

  // Jobs state & forms
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDept, setJobDept] = useState("Government Relations");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobLoc, setJobLoc] = useState("Sheikh Zayed Road, Dubai");
  const [jobExp, setJobExp] = useState("3+ Years in UAE");
  const [jobDesc, setJobDesc] = useState("");
  const [jobSuccess, setJobSuccess] = useState("");
  const [jobError, setJobError] = useState("");

  // Gallery state & forms
  const [gallery, setGallery] = useState<any[]>([]);
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoCategory, setPhotoCategory] = useState("al_quoz_ind_2");
  const [photoUrl, setPhotoUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [gallerySuccess, setGallerySuccess] = useState("");
  const [galleryError, setGalleryError] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchJobs();
      fetchGallery();
      fetchHomepageContent();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check-auth");
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        const errData = await res.json();
        setLoginError(errData.error || "Invalid username or password");
      }
    } catch {
      setLoginError("Login request failed. Please check backend connection.");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setIsAuthenticated(false);
    } catch {
      alert("Logout failed");
    }
  };

  // Fetch Homepage Content
  const fetchHomepageContent = async () => {
    try {
      const { data, error } = await supabaseAnon.from("homepage_content").select("*");
      if (error) throw error;
      
      if (data) {
        data.forEach((item: any) => {
          if (item.key === "hero_slide1_title") setSlide1Title(item.value);
          if (item.key === "hero_slide1_desc") setSlide1Desc(item.value);
          if (item.key === "hero_slide2_title") setSlide2Title(item.value);
          if (item.key === "hero_slide2_desc") setSlide2Desc(item.value);
          if (item.key === "about_title") setAboutTitle(item.value);
          if (item.key === "about_desc") setAboutDesc(item.value);
          if (item.key === "hero_slide1_image") setSlide1Image(item.value);
          if (item.key === "hero_slide2_image") setSlide2Image(item.value);
          if (item.key === "about_image") setAboutImage(item.value);
          if (item.key === "why_choose_image") setWhyChooseImage(item.value);
        });
      }
    } catch (err: any) {
      console.warn("Error fetching homepage content:", err.message);
    }
  };

  // Generic uploader helper for homepage images
  const uploadHomepageImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        return data.url;
      } else {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }
    } catch (err: any) {
      alert(err.message || "Upload failed");
      return null;
    }
  };

  const handleSlide1ImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingSlide1(true);
      const url = await uploadHomepageImage(e.target.files[0]);
      if (url) setSlide1Image(url);
      setUploadingSlide1(false);
    }
  };

  const handleSlide2ImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingSlide2(true);
      const url = await uploadHomepageImage(e.target.files[0]);
      if (url) setSlide2Image(url);
      setUploadingSlide2(false);
    }
  };

  const handleAboutImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingAbout(true);
      const url = await uploadHomepageImage(e.target.files[0]);
      if (url) setAboutImage(url);
      setUploadingAbout(false);
    }
  };

  const handleWhyChooseImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingWhyChoose(true);
      const url = await uploadHomepageImage(e.target.files[0]);
      if (url) setWhyChooseImage(url);
      setUploadingWhyChoose(false);
    }
  };

  // Save Homepage Content
  const handleSaveHomepage = async (e: React.FormEvent) => {
    e.preventDefault();
    setHomepageSuccess("");
    setHomepageError("");
    setSavingHomepage(true);

    const updates = [
      { key: "hero_slide1_title", value: slide1Title },
      { key: "hero_slide1_desc", value: slide1Desc },
      { key: "hero_slide2_title", value: slide2Title },
      { key: "hero_slide2_desc", value: slide2Desc },
      { key: "about_title", value: aboutTitle },
      { key: "about_desc", value: aboutDesc },
      { key: "hero_slide1_image", value: slide1Image },
      { key: "hero_slide2_image", value: slide2Image },
      { key: "about_image", value: aboutImage },
      { key: "why_choose_image", value: whyChooseImage },
    ];

    try {
      const res = await fetch("/api/admin/homepage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (res.ok) {
        setHomepageSuccess("Homepage content updated successfully!");
        fetchHomepageContent();
      } else {
        const err = await res.json();
        setHomepageError(err.error || "Failed to update homepage content");
      }
    } catch (err: any) {
      setHomepageError(err.message || "An unexpected error occurred");
    } finally {
      setSavingHomepage(false);
    }
  };

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const { data, error } = await supabaseAnon.from("jobs").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      setJobs(data || []);
    } catch (err: any) {
      console.warn("Error fetching jobs from Supabase:", err.message);
    }
  };

  // Add Job
  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobSuccess("");
    setJobError("");

    try {
      const res = await fetch("/api/admin/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: jobTitle,
          dept: jobDept,
          type: jobType,
          loc: jobLoc,
          exp: jobExp,
          desc: jobDesc,
        }),
      });

      if (res.ok) {
        setJobSuccess("Job listing added successfully!");
        setJobTitle("");
        setJobDesc("");
        fetchJobs();
      } else {
        const err = await res.json();
        setJobError(err.error || "Failed to add job listing");
      }
    } catch (err: any) {
      setJobError(err.message || "An unexpected error occurred");
    }
  };

  // Delete Job
  const handleDeleteJob = async (id: number) => {
    if (!confirm("Are you sure you want to delete this job listing?")) return;

    try {
      const res = await fetch(`/api/admin/jobs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchJobs();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete job");
      }
    } catch (err: any) {
      alert(err.message || "Delete failed");
    }
  };

  // Fetch Gallery
  const fetchGallery = async () => {
    try {
      const { data, error } = await supabaseAnon.from("gallery").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      setGallery(data || []);
    } catch (err: any) {
      console.warn("Error fetching gallery from Supabase:", err.message);
    }
  };

  // Handle File Select for Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Upload File directly to Storage via API
  const handleUploadFile = async () => {
    if (!selectedFile) return null;
    setUploadingFile(true);
    setGalleryError("");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setSelectedFile(null);
        // Clear file input manually
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        return data.url;
      } else {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }
    } catch (err: any) {
      setGalleryError(err.message || "File upload failed. Ensure 'gallery' bucket is created in Supabase Storage.");
      return null;
    } finally {
      setUploadingFile(false);
    }
  };

  // Add Gallery Image
  const handleAddPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    setGallerySuccess("");
    setGalleryError("");

    try {
      let finalUrl = photoUrl;

      // If file selected, upload it first
      if (selectedFile) {
        const uploadedUrl = await handleUploadFile();
        if (!uploadedUrl) return; // Error handled inside upload
        finalUrl = uploadedUrl;
      }

      if (!finalUrl) {
        setGalleryError("Please provide either an image URL or choose a file to upload.");
        return;
      }

      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: photoCategory,
          title: photoTitle,
          url: finalUrl,
        }),
      });

      if (res.ok) {
        setGallerySuccess("Gallery image added successfully!");
        setPhotoTitle("");
        setPhotoUrl("");
        setSelectedFile(null);
        fetchGallery();
      } else {
        const err = await res.json();
        setGalleryError(err.error || "Failed to add gallery image");
      }
    } catch (err: any) {
      setGalleryError(err.message || "An unexpected error occurred");
    }
  };

  // Delete Gallery Image
  const handleDeletePhoto = async (id: number) => {
    if (!confirm("Are you sure you want to delete this gallery image?")) return;

    try {
      const res = await fetch(`/api/admin/gallery?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchGallery();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete photo");
      }
    } catch (err: any) {
      alert(err.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-text-muted">Verifying session...</p>
        </div>
      </div>
    );
  }

  // 1. RENDER LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-85px)] bg-slate-900 flex items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#003281_0%,transparent_50%)] opacity-40"></div>
        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-slate-200">
          <div className="text-center mb-8 space-y-2">
            <h1 className="font-headline font-bold text-2xl md:text-3xl text-primary">Admin Control Center</h1>
            <p className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold">Easy Support CMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="p-4 rounded-xl bg-error-container text-error text-sm font-semibold flex items-center gap-2 border border-error/25">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {loginError}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary font-headline">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter administrator username"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary font-headline">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-container shadow-lg transition-all active:scale-95 text-sm"
            >
              Sign In to CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. RENDER DASHBOARD
  return (
    <div className="min-h-[calc(100vh-85px)] bg-surface flex flex-col lg:flex-row">
      {/* Sidebar Control Panel */}
      <aside className="w-full lg:w-64 bg-primary text-white p-6 shrink-0 flex flex-col justify-between border-r border-white/5">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline font-bold text-lg">Control Panel</h2>
            <p className="text-[10px] uppercase tracking-wider text-on-primary-container opacity-80 mt-0.5">Easy Support CMS</p>
          </div>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab("homepage")}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-bold text-left transition-all ${
                activeTab === "homepage"
                  ? "bg-secondary text-white shadow-lg translate-x-1"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-lg">home</span>
              Manage Homepage
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-bold text-left transition-all ${
                activeTab === "jobs"
                  ? "bg-secondary text-white shadow-lg translate-x-1"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-lg">work</span>
              Manage Careers
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-bold text-left transition-all ${
                activeTab === "gallery"
                  ? "bg-secondary text-white shadow-lg translate-x-1"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-lg">photo_library</span>
              Manage Gallery
            </button>
            <button
              onClick={() => setActiveTab("credentials")}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-bold text-left transition-all ${
                activeTab === "credentials"
                  ? "bg-secondary text-white shadow-lg translate-x-1"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-lg">settings</span>
              Supabase Config
            </button>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 mt-8">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-bold text-left text-red-200 hover:text-white hover:bg-red-800/30 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 md:p-10 max-w-6xl mx-auto w-full">
        {/* Warning Banner if Supabase is not configured */}
        {!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder-project-id") ? (
          <div className="mb-8 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col md:flex-row items-start gap-4 shadow-sm animate-fade-in">
            <span className="material-symbols-outlined text-amber-600 text-3xl font-bold select-none shrink-0">warning</span>
            <div className="space-y-1">
              <h4 className="font-bold font-headline text-base">Supabase is not configured yet!</h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                The CMS is currently running with placeholder credentials. Live database updates, file uploads, and data fetching will fail.
              </p>
              <p className="text-xs text-amber-700 font-semibold pt-1">
                To fix this, create a <code className="bg-amber-100/80 px-1.5 py-0.5 rounded font-mono font-bold text-[11px] text-amber-900 border border-amber-200">.env.local</code> file in the root folder and add your Supabase credentials (see the "Supabase Config" tab).
              </p>
            </div>
          </div>
        ) : null}

        {/* HOMEPAGE CONTENT TAB */}
        {activeTab === "homepage" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="font-headline font-bold text-2xl md:text-3xl text-primary">Manage Homepage Content</h1>
              <p className="text-sm text-text-muted mt-1">Update the headings and descriptions shown on your main landing page.</p>
            </div>

            <form onSubmit={handleSaveHomepage} className="space-y-6">
              {homepageSuccess && (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm font-semibold border border-green-200">
                  {homepageSuccess}
                </div>
              )}
              {homepageError && (
                <div className="p-4 rounded-xl bg-error-container text-error text-sm font-semibold border border-error/25">
                  {homepageError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hero Slide 1 Card */}
                <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">slideshow</span>
                    Hero Slide 1 (Main Banner)
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Slide 1 Title</label>
                    <input
                      type="text"
                      required
                      value={slide1Title}
                      onChange={(e) => setSlide1Title(e.target.value)}
                      placeholder="Slide 1 Title"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Slide 1 Description</label>
                    <textarea
                      required
                      rows={3}
                      value={slide1Desc}
                      onChange={(e) => setSlide1Desc(e.target.value)}
                      placeholder="Slide 1 Description text"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-primary font-headline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">image</span>
                      Background Image
                    </label>
                    <div className="flex items-center gap-4">
                      {slide1Image && (
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-border-light bg-slate-100 shrink-0">
                          <img src={slide1Image} alt="Slide 1 Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSlide1ImageUpload}
                        className="text-xs text-text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                    </div>
                    {uploadingSlide1 && <p className="text-[10px] text-primary animate-pulse">Uploading background image...</p>}
                  </div>
                </div>

                {/* Hero Slide 2 Card */}
                <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">slideshow</span>
                    Hero Slide 2
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Slide 2 Title</label>
                    <input
                      type="text"
                      required
                      value={slide2Title}
                      onChange={(e) => setSlide2Title(e.target.value)}
                      placeholder="Slide 2 Title"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Slide 2 Description</label>
                    <textarea
                      required
                      rows={3}
                      value={slide2Desc}
                      onChange={(e) => setSlide2Desc(e.target.value)}
                      placeholder="Slide 2 Description text"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-primary font-headline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">image</span>
                      Background Image
                    </label>
                    <div className="flex items-center gap-4">
                      {slide2Image && (
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-border-light bg-slate-100 shrink-0">
                          <img src={slide2Image} alt="Slide 2 Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSlide2ImageUpload}
                        className="text-xs text-text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                    </div>
                    {uploadingSlide2 && <p className="text-[10px] text-primary animate-pulse">Uploading background image...</p>}
                  </div>
                </div>
              </div>

              {/* About Preview Card */}
              <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">info</span>
                  About Us Section Preview
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Section Heading</label>
                    <textarea
                      required
                      rows={4}
                      value={aboutTitle}
                      onChange={(e) => setAboutTitle(e.target.value)}
                      placeholder="About Heading Title"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>
                  <div className="md:col-span-1 space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Section Body Paragraph</label>
                    <textarea
                      required
                      rows={6}
                      value={aboutDesc}
                      onChange={(e) => setAboutDesc(e.target.value)}
                      placeholder="About Body Description text"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>
                  <div className="md:col-span-1 space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">image</span>
                      Banner Image
                    </label>
                    <div className="flex flex-col gap-3">
                      {aboutImage && (
                        <div className="w-full h-24 rounded-lg overflow-hidden border border-border-light bg-slate-100">
                          <img src={aboutImage} alt="About Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAboutImageUpload}
                        className="text-xs text-text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                    </div>
                    {uploadingAbout && <p className="text-[10px] text-primary animate-pulse">Uploading banner image...</p>}
                  </div>
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">image</span>
                  Why Choose Us Section Image
                </h3>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary font-headline flex items-center gap-1">
                    Handshake / Collaborative Image
                  </label>
                  <div className="flex items-center gap-6">
                    {whyChooseImage && (
                      <div className="w-32 h-20 rounded-lg overflow-hidden border border-border-light bg-slate-100 shrink-0">
                        <img src={whyChooseImage} alt="Why Choose Us Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleWhyChooseImageUpload}
                        className="text-xs text-text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                      />
                      <p className="text-[10px] text-text-muted">
                        This image appears inside the large bento card on the homepage under the "Why Choose Us" grid.
                      </p>
                    </div>
                  </div>
                  {uploadingWhyChoose && <p className="text-[10px] text-primary animate-pulse">Uploading handshake image...</p>}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={savingHomepage}
                  className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95 text-sm flex items-center gap-2 disabled:opacity-75"
                >
                  {savingHomepage ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving Changes...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">save</span>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* JOBS TAB */}
        {activeTab === "jobs" && (
          <div className="space-y-8">
            <div>
              <h1 className="font-headline font-bold text-2xl md:text-3xl text-primary">Manage Job Listings</h1>
              <p className="text-sm text-text-muted mt-1">Add, update, or remove current job openings shown on the careers page.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Card */}
              <div className="lg:col-span-5 bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-6">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-3">Create New Opening</h3>
                
                <form onSubmit={handleAddJob} className="space-y-4">
                  {jobSuccess && <div className="p-3.5 rounded-xl bg-green-50 text-green-700 text-xs font-semibold border border-green-200">{jobSuccess}</div>}
                  {jobError && <div className="p-3.5 rounded-xl bg-error-container text-error text-xs font-semibold border border-error/25">{jobError}</div>}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Job Title</label>
                    <input
                      type="text"
                      required
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g. Senior PRO Executive"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-headline">Department</label>
                      <select
                        value={jobDept}
                        onChange={(e) => setJobDept(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm bg-white"
                      >
                        <option value="Government Relations">Government Relations</option>
                        <option value="Translations & Legal">Translations & Legal</option>
                        <option value="Front Office & Operations">Front Office & Operations</option>
                        <option value="Accounting & Audit">Accounting & Audit</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-headline">Job Type</label>
                      <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm bg-white"
                      >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-headline">Location</label>
                      <input
                        type="text"
                        required
                        value={jobLoc}
                        onChange={(e) => setJobLoc(e.target.value)}
                        placeholder="e.g. Al Quoz Branch"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-headline">Experience Needed</label>
                      <input
                        type="text"
                        required
                        value={jobExp}
                        onChange={(e) => setJobExp(e.target.value)}
                        placeholder="e.g. 2+ Years in UAE"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Description</label>
                    <textarea
                      required
                      rows={4}
                      value={jobDesc}
                      onChange={(e) => setJobDesc(e.target.value)}
                      placeholder="Enter detailed job requirements and specifications..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary-container text-white font-bold rounded-xl transition-all shadow-md active:scale-95 text-sm"
                  >
                    Publish Opening
                  </button>
                </form>
              </div>

              {/* List Card */}
              <div className="lg:col-span-7 bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-3">
                  Current Openings ({jobs.length})
                </h3>

                <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2 no-scrollbar">
                  {jobs.length === 0 ? (
                    <div className="py-12 text-center text-text-muted text-sm font-medium">No job listings found in Supabase database.</div>
                  ) : (
                    jobs.map((job) => (
                      <div key={job.id} className="p-4 border border-border-light rounded-xl hover:border-slate-300 transition-all flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <span className="inline-block px-2 py-0.5 bg-secondary-fixed text-primary text-[10px] font-bold rounded-full">{job.dept}</span>
                          <h4 className="font-bold text-primary text-sm font-headline">{job.title}</h4>
                          <p className="text-xs text-on-surface-variant line-clamp-2 pr-4">{job.desc}</p>
                          <div className="flex gap-4 text-[10px] text-text-muted font-semibold pt-1">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.loc}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="p-2 border border-slate-100 hover:border-red-200 text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                          aria-label="Delete job"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            <div>
              <h1 className="font-headline font-bold text-2xl md:text-3xl text-primary">Manage Gallery Images</h1>
              <p className="text-sm text-text-muted mt-1">Upload files or link images to showcase on the main office gallery page.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Card */}
              <div className="lg:col-span-5 bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-6">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-3">Add Gallery Item</h3>
                
                <form onSubmit={handleAddPhoto} className="space-y-4">
                  {gallerySuccess && <div className="p-3.5 rounded-xl bg-green-50 text-green-700 text-xs font-semibold border border-green-200">{gallerySuccess}</div>}
                  {galleryError && <div className="p-3.5 rounded-xl bg-error-container text-error text-xs font-semibold border border-error/25 leading-relaxed">{galleryError}</div>}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Photo Title</label>
                    <input
                      type="text"
                      required
                      value={photoTitle}
                      onChange={(e) => setPhotoTitle(e.target.value)}
                      placeholder="e.g. Dubai Main Reception"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Category</label>
                    <select
                      value={photoCategory}
                      onChange={(e) => setPhotoCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm bg-white"
                    >
                      <option value="al_quoz_ind_2">Branch 1 - Al Quoz Ind 2</option>
                      <option value="jebel_ali_ind_1">Branch 2 - Jebel Ali Ind 1</option>
                      <option value="najmat_al_madeena">Branch 3 - Najmat Al Madeena</option>
                      <option value="al_marabea_st">Branch 4 - Al Marabea St</option>
                      <option value="dip_1">Branch 5 - DIP 1</option>
                    </select>
                  </div>

                  {/* Option A: File Upload */}
                  <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl space-y-2 bg-slate-50">
                    <label className="text-xs font-bold text-primary font-headline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">upload_file</span>
                      Option A: File Upload
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full text-xs text-text-muted file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                    />
                    <p className="text-[10px] text-text-muted mt-1 leading-normal">
                      Uploads directly to Supabase Storage. (Requires a public bucket named &quot;gallery&quot;).
                    </p>
                  </div>

                  <div className="text-center text-xs font-bold text-text-muted uppercase tracking-wider select-none">— Or —</div>

                  {/* Option B: External URL */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-headline">Option B: Paste Image URL</label>
                    <input
                      type="text"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      placeholder="Paste Unsplash or static image URL"
                      disabled={!!selectedFile}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:outline-none text-sm transition-all disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={uploadingFile}
                    className="w-full py-3 bg-primary hover:bg-primary-container text-white font-bold rounded-xl transition-all shadow-md active:scale-95 text-sm flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {uploadingFile ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Uploading Image...
                      </>
                    ) : (
                      "Publish Photo"
                    )}
                  </button>
                </form>
              </div>

              {/* List Card */}
              <div className="lg:col-span-7 bg-white border border-border-light rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary border-b border-border-light pb-3">
                  Current Photos ({gallery.length})
                </h3>

                <div className="grid grid-cols-2 gap-4 max-h-[550px] overflow-y-auto pr-2 no-scrollbar">
                  {gallery.length === 0 ? (
                    <div className="col-span-2 py-12 text-center text-text-muted text-sm font-medium">No images found in Supabase gallery table.</div>
                  ) : (
                    gallery.map((photo) => (
                      <div key={photo.id} className="relative group border border-border-light rounded-xl overflow-hidden bg-slate-50 flex flex-col justify-between">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 flex justify-between items-center bg-white border-t border-border-light shrink-0">
                          <div className="truncate pr-2">
                            <p className="font-bold text-xs text-primary truncate font-headline">{photo.title}</p>
                            <span className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                              {photo.category === "al_quoz_ind_2"
                                ? "Branch 1 - Al Quoz Ind 2"
                                : photo.category === "jebel_ali_ind_1"
                                ? "Branch 2 - Jebel Ali Ind 1"
                                : photo.category === "najmat_al_madeena"
                                ? "Branch 3 - Najmat Al Madeena"
                                : photo.category === "al_marabea_st"
                                ? "Branch 4 - Al Marabea St"
                                : photo.category === "dip_1"
                                ? "Branch 5 - DIP 1"
                                : photo.category}
                            </span>
                          </div>
                          <button
                            onClick={() => handleDeletePhoto(photo.id)}
                            className="p-1.5 border border-slate-100 hover:border-red-200 text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                            aria-label="Delete image"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CREDENTIALS CONFIG TAB */}
        {activeTab === "credentials" && (
          <div className="space-y-6 bg-white border border-border-light rounded-2xl p-8 shadow-sm">
            <div>
              <h1 className="font-headline font-bold text-2xl text-primary mb-1">Supabase Credentials Guide</h1>
              <p className="text-sm text-text-muted">Ensure your local variables are correctly set up to run the CMS and database dynamic integrations.</p>
            </div>

            <div className="space-y-4 leading-relaxed font-sans text-sm text-on-surface-variant">
              <p>
                To run the CMS dynamic features locally and in production, create a file named <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-xs font-semibold">.env.local</code> in the root of your project directory and add the following keys:
              </p>

              <pre className="bg-slate-900 text-slate-100 p-5 rounded-xl text-xs font-mono select-all overflow-x-auto leading-normal">
{`# Supabase Database Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-api-key
SUPABASE_SERVICE_ROLE_KEY=your-secret-service-role-key-bypasses-RLS

# Admin Auth Access Controls
ADMIN_USERNAME=admin
ADMIN_PASSWORD=easyadmin123`}
              </pre>

              <div className="p-4 rounded-xl bg-primary/5 text-primary border border-primary/10 space-y-2">
                <h4 className="font-bold font-headline text-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">info</span>
                  Supabase Setup Checklist:
                </h4>
                <ol className="list-decimal pl-5 space-y-1 text-xs">
                  <li>Run the SQL statements from your project's <code className="bg-white/40 px-1 rounded">supabase_setup.sql</code> in the Supabase SQL editor to create the database tables.</li>
                  <li>Ensure your Supabase policies are active (the SQL script sets up public select read policies automatically).</li>
                  <li>To support local file uploads, create a new <strong>Storage Bucket</strong> named <code className="bg-white/40 px-1 rounded">gallery</code> in your Supabase dashboard and set it to <strong>Public</strong>.</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
