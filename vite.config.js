import { defineConfig } from 'vite';

export default defineConfig({
  // when deployed to https://<user>.github.io/Restaurant-Page/
  base: './',
  build: {
    assetsDir: 'assets',
  }
});