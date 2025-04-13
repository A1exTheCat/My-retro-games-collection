import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodePolyfills from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NodePolyfills({
      // Включаем полифиллы для Node.js
      crypto: true,
    }),
  ],
});
