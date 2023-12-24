import { NextApiRequest, NextApiResponse } from 'next';
import { csrfToken } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const token = await csrfToken(req);
    res.status(200).json({ csrfToken: token });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
