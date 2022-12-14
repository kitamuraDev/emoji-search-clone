import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: true,
    port: 5500,
  },
  preview: { port: 8080 },
  base: './',
  plugins: [react()],
});
