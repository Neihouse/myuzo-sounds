import type { NextApiRequest, NextApiResponse } from 'next';
import { AudioProcessor } from '../../../utils/AudioProcessor';
import { AudioProcessingResult } from '../../../models/AudioProcessingResult';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ processedData?: AudioProcessingResult; error?: string }>
) {
  if (req.method === 'POST') {
    try {
      const { fileUrl } = req.body;
      const audioProcessor = new AudioProcessor();
      const processedData = await audioProcessor.processFile(fileUrl);
      res.status(200).json({ processedData });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process audio file' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
