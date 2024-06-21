import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import pcg from "./package.json";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  plugins: [react()],

  define: { // > vite-env.d.ts
    __VERSION__: JSON.stringify(pcg.version),
    __REPO__: JSON.stringify(pcg.repository.url),
  },

  resolve: {
    alias: { // > tsconfig.app.json
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
