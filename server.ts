import 'dotenv/config';
import express from 'express';

import { getBattler } from './src/api/getBattler';
import { connectToServer, getDb } from './src/db/conn';

const PORT = process.env.PORT || 3000;

const server = express();

server.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello, world.' });
});

server.get('/battler/:name', (req, res) => {
  res.status(200).json(getBattler(req.params.name));

  // const db = getDb();

  // console.log(db.collection('elements').find({}));
});

(async () => {
  await connectToServer();

  server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();
