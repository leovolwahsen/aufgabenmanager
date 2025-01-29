import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'configure-server',
            configureServer: function (server) {
                server.middlewares.use(function (req, res, next) {
                    var _a;
                    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.endsWith('.tsx')) {
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