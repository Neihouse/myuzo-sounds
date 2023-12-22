import type { NextApiRequest, NextApiResponse } from 'next';
import { sampleSchema } from '../../schemas/sampleSchema';
import { AudioProcessingResult } from '../../models/AudioProcessingResult';

// Mock database
const samplesDatabase: AudioProcessingResult[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; error?: string }>
) {
  if (req.method === 'POST') {
    try {
      // Validate the request body against the sample schema
      await sampleSchema.validate(req.body);
      // Add the validated sample to the mock database
      samplesDatabase.push(req.body);
      res.status(201).json({ message: 'Sample added successfully' });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        res.status(400).json({ error: error.errors.join(', ') });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
