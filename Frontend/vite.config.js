// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensure your target is set to 'esnext'
    outDir: 'dist', // Output directory for the build artifacts (adjust as needed)
    assetsDir: '.', // Directory for static assets relative to your project root
    sourcemap: true, // Enable source maps for debugging (optional)
    minify: 'terser', // Minify your code using Terser (optional, can be set to 'esbuild' for faster minification)
    
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
});