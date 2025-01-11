// src/lib/socket-handler.ts
export class SocketHandler {
  private static instance: SocketHandler;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): SocketHandler {
    if (!SocketHandler.instance) {
      SocketHandler.instance = new SocketHandler();
    }
    return SocketHandler.instance;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      // Load Socket.IO
      await this.loadScript('http://localhost:8090/socket.io/socket.io.js');
      
      // Load Stackbit dev tools
      await this.loadScript('http://localhost:8090/_stackbit/dev.js');
      
      if (window.__stackbit) {
        window.__stackbit.init({
          devServerUrl: 'http://localhost:8090',
          devMode: true
        });
      }
      
      this.isInitialized = true;
      console.log('Socket handler initialized successfully');
    } catch (error) {
      console.error('Failed to initialize socket handler:', error);
      throw error;
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      
      document.body.appendChild(script);
    });
  }
}
