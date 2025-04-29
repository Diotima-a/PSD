import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// vite.config.ts

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    // Supprime ou commente la ligne ci-dessous
    // componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

