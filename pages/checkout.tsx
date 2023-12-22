import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import PaymentOptions from '../components/PaymentOptions';

export default function CheckoutPage() {
  return (
    <div>
      <CheckoutForm />
      <PaymentOptions />
    </div>
  );
}