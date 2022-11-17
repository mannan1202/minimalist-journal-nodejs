import { Prisma, PrismaClient } from '@prisma/client';

import express from 'express';
import router from './routes';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/api/v1', router);

const server = app.listen(5020, () =>
  console.log(`🚀 Server ready at: http://localhost:5020`)
);
