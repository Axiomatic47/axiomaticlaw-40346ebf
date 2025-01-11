export const initStackbit = () => {
  if (process.env.NODE_ENV === 'development') {
    try {
      console.log('Initializing Stackbit in development mode...');

      // First try to load socket.io
      const socketScript = document.createElement('script');
      socketScript.src = 'http://localhost:8090/socket.io/socket.io.js';
      socketScript.async = true;

      socketScript.onload = () => {
        console.log('Socket.IO loaded successfully');

        // After socket.io loads, load Stackbit dev tools
        const stackbitScript = document.createElement('script');
        stackbitScript.src = 'http://localhost:8090/_stackbit/dev.js';
        stackbitScript.async = true;

        stackbitScript.onload = () => {
          console.log('Stackbit dev tools loaded successfully');
        };

        stackbitScript.onerror = (error) => {
          console.error('Failed to load Stackbit dev tools:', error);
        };

        document.body.appendChild(stackbitScript);
      };

      socketScript.onerror = (error) => {
        console.error('Failed to load Socket.IO:', error);
      };

      document.body.appendChild(socketScript);
    } catch (error) {
      console.error('Error initializing Stackbit:', error);
    }
  }
};