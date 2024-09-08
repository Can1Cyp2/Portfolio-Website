import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio-Website/", // Your GitHub repository name
  plugins: [react()],
});
