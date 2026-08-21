import { createClient } from "@supabase/supabase-js";

// Use placeholders during build to prevent build-time failures if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project-id.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "placeholder-anon-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "placeholder-service-key";

// Client for public reads (safe for client and server side)
export const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey);

// Server-only client for admin write operations (bypassing RLS)
export const getSupabaseAdmin = () => {
  if (typeof window !== "undefined") {
    throw new Error("supabaseAdmin can only be used on the server side.");
  }
  return createClient(supabaseUrl, supabaseServiceKey);
};
