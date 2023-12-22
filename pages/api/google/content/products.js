const { content, authenticate } = require('../../../../lib/googleContentApi');

export default async function handler(req, res) {
  await authenticate();

  const { merchantId } = req.body;

  try {
    const response = await content.products.list({
      merchantId,
      // Add any other parameters you need for the request
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.code).json({ error: error.message });
  }
}
