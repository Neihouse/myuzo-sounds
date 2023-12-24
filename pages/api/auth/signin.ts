import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Signed in successfully' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
