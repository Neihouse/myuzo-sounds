import { paypalClient } from '../../lib/paypalClient';

export default async function handler(req, res) {
  const request = new paypalClient.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '100.00', // Replace with the actual amount
      },
    }],
  });

  try {
    const order = await paypalClient.execute(request);
    res.status(201).json({
      id: order.result.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
