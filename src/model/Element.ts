import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb://root:password@localhost:27017/magic-battle',
);

async function run() {
  try {
    await client.connect();

    await client.db('magic-battle').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
