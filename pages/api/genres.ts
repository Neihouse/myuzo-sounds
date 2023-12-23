import type { NextApiRequest, NextApiResponse } from 'next';

const genres = ['Rock', 'Jazz', 'Electronic', 'Classical', 'Pop', 'Hip-Hop'];

type Data = {
  genres: string[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    res.status(200).json({ genres });
  } catch (error) {
    res.status(500).json({ genres: [], error: 'Failed to fetch genres' });
  }
}
