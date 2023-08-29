import redis from 'redis';

const client = redis.createClient();
const hashKey = 'HolbertonSchools';

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

const schools = {
  'Portland': '50',
  'Seattle': '80',
  'New York': '20',
  'Bogota': '20',
  'Cali': '40',
  'Paris': '2'
};

for (const key in schools) {
  client.hset(hashKey, key, schools[key], (err, reply) => {
    redis.print(`Reply: ${reply}`);
  });
}

client.hgetall(hashKey, (err, hash) => {
  console.log(hash);
});
