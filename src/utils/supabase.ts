import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

export const supabase = createClient<Database>(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);
