import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';

import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['axios', 'lodash', 'three'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        unused: true,
        dead_code: true,
        passes: 3,
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        generatedCode: 'es2015',
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia', 'axios'],
          three: ['three'],
        },
        compact: true,
        sanitizeFileName: true,
      },
    },
  },
});
