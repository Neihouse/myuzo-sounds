import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Logic to handle feedback submission
    // For now, we'll just log the feedback to the console
    console.log('Feedback received:', req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Feedback submission failed' });
  }
}
