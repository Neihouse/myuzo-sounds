import { NextApiRequest, NextApiResponse } from 'next';
import { userSchema } from '../../schemas/userSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Validate the request body against the user schema
      await userSchema.validate(req.body);
      // TODO: Implement user creation logic
      // This would involve saving the user details to the database
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}