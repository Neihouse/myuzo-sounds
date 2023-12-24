import { NextApiRequest, NextApiResponse } from 'next';
import { categorySchema } from '../../schemas/categorySchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Validate the request body against the category schema
      await categorySchema.validate(req.body);
      // TODO: Implement category creation logic:
      // 1. Connect to the database using a database client or ORM.
      // 2. Insert the new category into the 'categories' collection/table.
      // 3. Return the ID of the newly created category.
      res.status(201).json({ message: 'Category created successfully' });
    } catch (error) {
      if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(500).json({ error: 'Failed to create category due to a server error' });
        }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}