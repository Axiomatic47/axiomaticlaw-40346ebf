import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const httpServer = createServer(app);

// CORS middleware with specific settings
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8090'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Add headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Proxy configuration
const stackbitProxy = createProxyMiddleware({
  target: 'http://localhost:8090',
  changeOrigin: true,
  ws: true,
  secure: false,
  logLevel: 'debug',
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Something went wrong with the proxy');
  }
});

// Apply proxy to paths
app.use(['/_stackbit', '/socket.io', '/_socket'], stackbitProxy);

const PORT = 4000;

httpServer.listen(PORT, () => {
  console.log(`Development server running on http://localhost:${PORT}`);
});