import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace 'your-repo-name' with your actual GitHub repo name
const repoName = "Harsh-Vardhan-Raju-portfolio";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/$Harsh-Vardhan-Raju-portfolio/` : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

