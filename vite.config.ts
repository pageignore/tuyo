
import { defineConfig } from 'vite'
import path from 'path';
import dts from "rollup-plugin-dts";
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'dist_utils',
    lib: {
      entry: path.resolve(__dirname, './src/tuyo/utils.ts'),
      name: 'utils',
      fileName: 'utils',
      formats:['cjs', 'umd', 'es']
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
