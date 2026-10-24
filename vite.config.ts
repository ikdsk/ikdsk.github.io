import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 文学賞の本棚は https://ikdsk.github.io/books/ に配置する。
// ルート（D's slop）は site/ を scripts/build-root.mjs で dist/ 直下へコピーする。
export default defineConfig({
  plugins: [react()],
  base: '/books/',
  build: {
    outDir: 'dist/books',
    emptyOutDir: true,
  },
})
