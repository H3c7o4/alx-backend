import redis from 'redis';
const { promisify } = require('util');

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

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => {
  redis.print(`Reply: ${reply}`);
  });
}

const get = promisify(client.get).bind(client);
const displaySchoolValue = async (schoolName) => {
  const value = await get(schoolName);
  console.log(value);
}

(async() => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
