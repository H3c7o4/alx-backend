const kue = require('kue');

const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];
const queue = kue.createQueue();

for (const jobData in jobs) {
  const job = queue.create('push_notification_code', jobData).save((err) => {
  if (!err) console.log(`Notification job created: ${job.id}`);
  else console.log(`Notification job ${job.id} failed: ${err}`);
  });

  job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
  });

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress = (progress + 10) > 100 ? 100: progress + 10;
    console.log(`Notification job ${job.id} ${progress}% complete`);

    if (progress === 100) {
      clearInterval(progressInterval);
    }
  }, 1000);
}
