import type { NextApiRequest, NextApiResponse } from 'next';
import { searchSamples } from '../../utils/searchSamples';

type Data = {
  samples: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
  }>;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { query } = req.query;
    const samples = await searchSamples(query as string);
    res.status(200).json({ samples });
  } catch (error) {
    res.status(500).json({ samples: [], error: 'Search failed' });
  }
}
