import { paypalClient } from '../../lib/paypalClient';

export default async function handler(req, res) {
  const { orderID } = req.body;

  const request = new paypalClient.orders.OrdersAuthorizeRequest(orderID);
  request.requestBody({});

  try {
    const authorization = await paypalClient.execute(request);
    res.status(201).json({
      status: authorization.result.status,
      id: authorization.result.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
