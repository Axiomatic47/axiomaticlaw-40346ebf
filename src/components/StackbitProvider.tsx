// src/components/StackbitProvider.tsx
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    __stackbit?: any;
  }
}

export const StackbitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || initialized.current) {
      return;
    }

    const initialize = async () => {
      try {
        // Check if Stackbit server is available
        const response = await fetch('http://localhost:8090/_stackbit/health', {
          method: 'GET',
          mode: 'no-cors',
        });

        // Load Stackbit script
        const script = document.createElement('script');
        script.src = 'http://localhost:8090/_stackbit/dev.js';
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.onload = () => {
          // Check if window.__stackbit exists before trying to initialize
          if (window.__stackbit) {
            window.__stackbit.init({
              devServerUrl: 'http://localhost:8090',
              devMode: true,
              project: {
                id: 'bf130ccf9c8f40d4a4ef688884261e9f',
                baseUrl: 'http://localhost:3000',
                previewUrl: 'http://localhost:3000'
              }
            });
            initialized.current = true;
            console.log('Stackbit initialized successfully');
          } else {
            console.warn('Stackbit object not found after script load');
            throw new Error('Stackbit initialization failed');
          }
        };

        script.onerror = (error) => {
          console.error('Failed to load Stackbit script:', error);
          throw error;
        };

        document.body.appendChild(script);

      } catch (error) {
        console.error('Error during initialization:', error);
        if (!initialized.current) {
          setTimeout(initialize, 5000);
        }
      }
    };

    initialize();

    return () => {
      initialized.current = false;
      document.querySelectorAll('script[src*="localhost:8090"]').forEach(script => script.remove());
    };
  }, []);

  return <>{children}</>;
};

export default StackbitProvider;