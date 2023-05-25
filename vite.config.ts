import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_REPO_NAME ?? "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          r: ["react"],
          d: ["react-dom"],
          e: ["@emotion/react", "@emotion/styled"],
          m: ["@mui/material"],
        },
      },
    },
  },
});
