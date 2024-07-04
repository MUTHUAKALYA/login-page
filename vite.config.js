import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dotenv from "dotenv";

// Load environment variables from .env file
// dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   "import.meta.env": import.meta.env,
  // },
  build: {
    outDir: "dist",
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://165.232.188.36", //import.meta.env.VITE_API_URL, //Base URL of the api server
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://165.232.188.36", // Base URL of the API Server
//         changeOrigin: true,
//         secure: false,
//         ws: true,
//       },
//     },
//   },
// });
