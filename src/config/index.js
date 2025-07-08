const config = {
  socketServerUrl: process.env.NODE_ENV === 'production' 
    ? 'https://juegoservidordemo.onrender.com'
    : 'http://localhost:5000',
  socketOptions: {
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    timeout: 20000,
    forceNew: false,
    transports: ['websocket', 'polling']
  }
};

export default config;