import type { NextApiRequest, NextApiResponse } from 'next';
import { AudioProcessor } from '../../../utils/AudioProcessor';
import { AudioProcessingResult } from '../../../models/AudioProcessingResult';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success?: boolean; error?: string }>
) {
  if (req.method === 'POST') {
    try {
      const { processedData } = req.body;
      const audioProcessor = new AudioProcessor();
      await audioProcessor.updateDatabase(processedData as AudioProcessingResult);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update database with audio processing data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
