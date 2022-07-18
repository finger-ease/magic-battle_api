import 'dotenv/config';
import express from 'express';
import { getBattler } from './src/api/getBattler';

const server = express();
server.get('/:name', (req, res) => {
  res.status(200).json(getBattler(req.params.name));
});

server.listen(process.env.PORT);
