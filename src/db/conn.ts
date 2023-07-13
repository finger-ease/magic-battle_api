import { MongoClient, Db, Callback } from 'mongodb';

const client = new MongoClient('mongodb://root:password@localhost:27017');

let db: Db;

export const connectToServer = async () => {
  try {
    await client.connect();

    await client.db('magic-battle').command({ ping: 1 });
    console.log('Successfully connected to MongoDB.');
  } catch (e) {
    console.error(e);
  }
  // MongoClient.connect('mongodb://root:password@localhost:27017')
  // client.connect((err, result) => {
  //   if (err || !result) return callback(err);

  //   db = result.db('magic-battle');
  //   console.log('Successfully connected to MongoDB.');

  //   return callback();
  // });
};

export const getDb = () => {
  return db;
};
