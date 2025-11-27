// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       'react': path.resolve(__dirname, 'node_modules/react'),
//       'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
//       'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime')
//     }
//   }
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Must export a config object
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional: set dev server port
  },
});
