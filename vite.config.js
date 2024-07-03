import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://165.232.188.36",
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },
});
