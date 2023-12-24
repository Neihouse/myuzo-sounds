import { NextApiRequest, NextApiResponse } from 'next';
import { callbacks } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { signIn, redirect, session, jwt } = callbacks;

  // Implement custom callback logic here

  res.status(200).json({
    signIn: typeof signIn === 'function',
    redirect: typeof redirect === 'function',
    session: typeof session === 'function',
    jwt: typeof jwt === 'function',
  });
};
