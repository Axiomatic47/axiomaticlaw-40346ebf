// src/lib/stackbit-client.ts
import { useEffect } from 'react';

declare global {
  interface Window {
    __stackbit?: any;
  }
}

export const useStackbit = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const connectToStackbit = async () => {
        try {
          console.log('Initializing Stackbit...');
          
          const script = document.createElement('script');
          script.src = 'http://127.0.0.1:8090/_stackbit/dev.js';
          script.async = true;
          
          script.onload = () => {
            console.log('Stackbit script loaded');
            if (window.__stackbit) {
              window.__stackbit.init({
                devServerUrl: 'http://127.0.0.1:8090',
                devMode: true
              });
            }
          };
          
          script.onerror = (error) => {
            console.error('Error loading Stackbit script:', error);
          };
          
          document.body.appendChild(script);
          
        } catch (error) {
          console.error('Error initializing Stackbit:', error);
        }
      };

      connectToStackbit();
    }
  }, []);
};

export class StackbitClient {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 5;

  connect() {
    if (process.env.NODE_ENV !== 'development') return;

    console.log('Attempting to connect to Stackbit WebSocket...');
    
    this.ws = new WebSocket('ws://127.0.0.1:8090');
    
    this.ws.onopen = () => {
      console.log('Connected to Stackbit WebSocket');
      this.reconnectAttempts = 0;
      this.loadDevTools();
    };
    
    this.ws.onclose = () => {
      console.log('Disconnected from Stackbit WebSocket');
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
        setTimeout(() => this.connect(), 3000);
      }
    };
    
    this.ws.onerror = (error) => {
      console.error('Stackbit WebSocket error:', error);
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Received message from Stackbit:', data);
      } catch (e) {
        console.log('Received message from Stackbit:', event.data);
      }
    };
  }

  private loadDevTools() {
    // Check if already loaded
    if (document.querySelector('script[src*="/_stackbit/dev.js"]')) {
      console.log('Stackbit dev tools already loaded');
      return;
    }

    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:8090/_stackbit/dev.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Stackbit dev tools loaded successfully');
      if (window.__stackbit) {
        window.__stackbit.init({
          devServerUrl: 'http://127.0.0.1:8090',
          devMode: true
        });
      }
    };

    script.onerror = (error) => {
      console.error('Error loading Stackbit dev tools:', error);
    };

    document.body.appendChild(script);
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default StackbitClient;