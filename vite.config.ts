import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: {
      origin: ['http://localhost:8090'],
      credentials: true,
      allowedHeaders: ['*']
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Private-Network': 'true',
      'Access-Control-Allow-Headers': '*'
    },
    proxy: {
      '/_stackbit': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: true,
        secure: false
      },
      '/socket.io': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: true,
        secure: false,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      },
      '/_socket': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: true,
        secure: false,
      }
    },
    middlewareMode: false
  }
});