import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

type ErrorResponse = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  if (req.method === 'POST') {
    // Process the contact request
    // For example, send an email or save to a database

    // Send a success response
    res.status(200).json({ message: 'Contact request received' });
  } else {
    // Handle unknown other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
