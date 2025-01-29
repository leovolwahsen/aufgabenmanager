import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.tsx')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  esbuild: {
    loader: 'tsx',
    include: /\.(tsx|ts|jsx|js)?$/
  }
});