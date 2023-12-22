// This is a placeholder file for creating a Stripe Checkout session.
// You'll need to replace 'your_stripe_secret_key' with your actual Stripe secret key.

const stripe = require('stripe')('your_stripe_secret_key');

export default async (req, res) => {
  const { amount } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Sample Audio',
        },
        unit_amount: amount,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
  });

  res.json({ id: session.id });
};
