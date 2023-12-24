import type { NextApiRequest, NextApiResponse } from 'next';
import { sampleSchema } from '../../../schemas/sampleSchema';
import { AudioProcessingResult } from '../../../models/AudioProcessingResult';

// Mock database
const samplesDatabase: AudioProcessingResult[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ samples?: AudioProcessingResult[]; error?: string }>
) {
  if (req.method === 'GET') {
    // Retrieve all samples
    res.status(200).json({ samples: samplesDatabase });
  } else if (req.method === 'POST') {
    try {
      // Validate the request body against the sample schema
      await sampleSchema.validate(req.body);
      // Add the validated sample to the mock database
      samplesDatabase.push(req.body);
      res.status(201).json({ samples: samplesDatabase });
    } catch (error) {
      if (error instanceof Error && 'errors' in error) {
        const validationError = error as { errors: string[] };
        res.status(400).json({ error: validationError.errors.join(', ') });
      } else {
        res.status(500).json({ error: 'Failed to process sample request due to a server error' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
