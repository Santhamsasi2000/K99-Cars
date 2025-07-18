import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/", 
  plugins: [react()],
  build: {
    outDir: 'build', // 👈 This changes the output folder from 'dist' to 'build'
  },
})
