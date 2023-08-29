import redis from 'redis';

// Create Redis client
const client = redis.createClient();

// Connect to Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Log error message when connection fails
client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

client.subscribe('holberton school channel');

client.on('message', (channel, message) => {
  console.log(`${message}`);

  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});

