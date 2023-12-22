import type { NextApiRequest, NextApiResponse } from 'next';
import { searchSamples } from '../../../utils/searchSamples';
import { AudioProcessingResult } from '../../../models/AudioProcessingResult';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ samples?: AudioProcessingResult[]; error?: string }>
) {
  if (req.method === 'GET') {
    const { query } = req.query;
    if (typeof query === 'string') {
      try {
        const samples = await searchSamples(query);
        res.status(200).json({ samples });
      } catch (error) {
        res.status(500).json({ error: 'Failed to search for samples' });
      }
    } else {
      res.status(400).json({ error: 'Query must be a string' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
