import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages等でサブパスにデプロイする場合は base を設定
  // base: '/book/',
})
