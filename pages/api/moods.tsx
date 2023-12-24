import type { NextApiRequest, NextApiResponse } from 'next';

const moods = ['Happy', 'Sad', 'Energetic', 'Calm', 'Dark', 'Romantic'];

type Data = {
  moods: string[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    res.status(200).json({ moods });
  } catch (error) {
    res.status(500).json({ moods: [], error: 'Failed to fetch moods' });
  }
}
