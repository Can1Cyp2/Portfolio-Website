import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio-Website/", // GitHub repository name
  plugins: [react()],
});
