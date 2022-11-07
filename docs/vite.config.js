import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
  root: './src',
})
