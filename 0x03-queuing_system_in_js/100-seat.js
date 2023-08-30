import { promisify } from 'util';
const client = require('redis').createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const reserveSeat = (number) => {
  return new Promise(async (resolve, reject) => {
    const availableSeats = await getAsync('available_seats');
    
    if (availableSeats > 0 && reservationEnabled) {
      client.set('available_seats', availableSeats - 1, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    } else {
      resolve('No seat available for reservation');
    }
  });
};

const getCurrentAvailableSeats = async () => {
  const availableSeats = await getAsync('available_seats');
  return availableSeats ? parseInt(availableSeats) : 0;
}

let reservationEnabled = true;
setAsync('available_seats', 50);

getCurrentAvailableSeats().then(seats => {
  if (seats === 0) {
    reservationEnabled = false;
  }
});

getCurrentAvailableSeats()
  .then(seats => console.log(`Current available seats: ${seats}`))
  .catch(err => console.error(err));
