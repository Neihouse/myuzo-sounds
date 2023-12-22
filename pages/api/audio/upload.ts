import type { NextApiRequest, NextApiResponse } from 'next';
import { AudioProcessor } from '../../../utils/AudioProcessor';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { file } = req.body;
      const audioProcessor = new AudioProcessor();
      const fileUrl = await audioProcessor.uploadFile(file);
      res.status(200).json({ fileUrl });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload audio file' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
