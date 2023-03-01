import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/E-Commerce/",
  plugins: [react()],
  define: {
    'process.env': {}
  }

})
