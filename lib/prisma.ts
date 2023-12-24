import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as unknown).prisma) {
    (global as unknown).prisma = new PrismaClient();
  }
  prisma = (global as unknown).prisma;
}

export default prisma;
