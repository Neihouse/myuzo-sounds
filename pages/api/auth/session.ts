import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    res.status(200).json(session);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
