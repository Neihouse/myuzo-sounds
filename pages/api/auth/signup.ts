import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../lib/auth';
import prisma from '../../lib/prismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json({ message: 'User created', user });
    } catch (error) {
      res.status(500).json({ message: 'Unable to create user', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
