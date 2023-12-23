import type { NextApiRequest, NextApiResponse } from 'next';

const instruments = ['Guitar', 'Piano', 'Drums', 'Violin', 'Bass', 'Saxophone'];

type Data = {
  instruments: string[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    res.status(200).json({ instruments });
  } catch (error) {
    res.status(500).json({ instruments: [], error: 'Failed to fetch instruments' });
  }
}
