import type { NextApiRequest, NextApiResponse } from 'next';
import { parseForm } from '../../utils/parseForm';
import { storeSample as storeMusicSample } from '../../utils/storeSample';

type Data = {
  success: boolean;
  sampleId?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const formData = await parseForm(req);
    const { sampleId } = await storeMusicSample(formData);
    res.status(200).json({ success: true, sampleId });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Sample upload failed' });
  }
}
