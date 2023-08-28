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

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => {
  redis.print(`Reply: ${reply}`);
  });
}

const displaySchoolValue = (schoolName) => {
  client.get(schoolName, (err, reply) => {
    console.log(`${reply}`);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
