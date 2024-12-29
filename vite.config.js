import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
});