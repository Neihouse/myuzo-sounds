import { content, authenticate } from '../../../../lib/googleContentApi';

export default async function handler(req, res) {
  await authenticate();

  const { merchantId } = req.body;

  try {
    const response = await content.orders.list({
      merchantId,
      // Add // TODO: Replace 'any' with appropriate type other parameters you need for the request
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.code).json({ error: error.message });
  }
}
