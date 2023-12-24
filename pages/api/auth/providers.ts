import { NextApiRequest, NextApiResponse } from 'next';
import { getProviders } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const providers = await getProviders();
  res.status(200).json(providers);
};
