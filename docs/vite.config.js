import path from 'path'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@sanity/demo': path.resolve(__dirname, '../exports/index.ts'),
    },
  },
  root: './src',
})
