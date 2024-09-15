import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rcjxtdjnwbbtimrkhlgo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjanh0ZGpud2JidGltcmtobGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzOTgzNjMsImV4cCI6MjA0MTk3NDM2M30.F5xkA3kYGv6OcQpnTG4QdNuBe_boqOIR3WEudgVWx58";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
