
import { defineConfig } from 'vite'
import path from 'path';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'dist_index',
    lib: {
      entry: path.resolve(__dirname, './src/tuyo/index.ts'),
      name: 'index',
      fileName: 'index',
      formats:['umd', 'es']
    },
    rollupOptions: {
      external: ['big.js'],
      // output: {
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    }
  },
  plugins: [
    {
      ...typescript({
      }),
      apply: 'build'
    }
  ]
})