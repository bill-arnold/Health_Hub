import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // ... other configurations

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Assuming 'src' is your project root
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
