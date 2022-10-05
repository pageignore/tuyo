
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './src/tuyo/index.ts'),
      name: 'tuyo',
      fileName: 'tuyo'
    },
    rollupOptions: {
      // external: ['vue'],
      // output: {
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    }
  }
})
