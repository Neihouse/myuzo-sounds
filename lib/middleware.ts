import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { verifyToken } from './auth';

export const withAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token || !verifyToken(token)) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return handler(req, res);
  };
};
