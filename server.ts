import 'dotenv/config';
import express from 'express';
import getBattler from './src/api/getBattler';

const server = express();
server.get('/:name', (req, res) => {
  const battler = getBattler(req.params.name);
  res.status(200).json({ message: battler });
});

server.listen(process.env.PORT);
