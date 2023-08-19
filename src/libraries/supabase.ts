import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ulmlaxzrbjmiwohvqihp.supabase.co",
  apiKey
);
