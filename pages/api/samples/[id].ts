import type { NextApiRequest, NextApiResponse } from 'next';
import { sampleSchema } from '../../../schemas/sampleSchema';
import { AudioProcessingResult } from '../../../models/AudioProcessingResult';

// Mock database
const samplesDatabase: { [key: string]: AudioProcessingResult } = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ sample?: AudioProcessingResult; error?: string }>
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Retrieve a sample by ID
    const sample = samplesDatabase[id as string];
    if (sample) {
      res.status(200).json({ sample });
    } else {
      res.status(404).json({ error: 'Sample not found' });
    }
  } else if (req.method === 'PUT') {
    try {
      // Validate the request body against the sample schema
      await sampleSchema.validate(req.body);
      // Update the sample in the mock database
      samplesDatabase[id as string] = req.body;
      res.status(200).json({ sample: req.body });
    } catch (error) {
      if (error instanceof Error && 'errors' in error) {
        const validationError = error as { errors: string[] };
        res.status(400).json({ error: validationError.errors.join(', ') });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else if (req.method === 'DELETE') {
    // Delete a sample by ID
    if (samplesDatabase[id as string]) {
      delete samplesDatabase[id as string];
      res.status(200).json({ sample: undefined });
    } else {
      res.status(404).json({ error: 'Sample not found' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
