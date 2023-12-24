import { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await signOut({ req, redirect: false });
    res.status(200).json({ message: 'Signed out successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
