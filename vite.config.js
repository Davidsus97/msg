import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  // ... other configuration options

  plugins: [
    // ... other plugins
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
