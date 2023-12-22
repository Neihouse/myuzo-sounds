import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

const StripeCheckoutButton = ({ amount }) => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.error(result.error.message);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

export default StripeCheckoutButton;
