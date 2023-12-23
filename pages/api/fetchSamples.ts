import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveMusicSamples as getSamples } from '../../utils/getSamples';

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
    const samples = await getSamples();
    res.status(200).json({ samples });
  } catch (error) {
    res.status(500).json({ samples: [], error: 'Failed to fetch samples' });
  }
}
