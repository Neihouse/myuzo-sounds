import { paypalClient } from '../../lib/paypalClient';

export default async function handler(req, res) {
  const { orderID } = req.body;

  const request = new paypalClient.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await paypalClient.execute(request);
    res.status(201).json({
      status: capture.result.status,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
