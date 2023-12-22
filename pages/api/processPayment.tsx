import type { NextApiRequest, NextApiResponse } from 'next';
import { processSamplePayment } from '../../utils/processSamplePayment';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const paymentResult = await processSamplePayment(req.body);
    res.status(200).json({ success: paymentResult });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Payment processing failed' });
  }
}
