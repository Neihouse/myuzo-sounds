import React from 'react';
import styles from '../styles/PaymentOptions.module.css';

const PaymentOptions = () => {
  return (
    <div className={styles.paymentOptions}>
      <h2>Payment Options</h2>
      {/* Payment options will go here */}
      <div>
        <label>
          <input type="radio" name="paymentMethod" value="creditCard" /> Credit Card
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="paypal" /> PayPal
        </label>
        {/* Add more payment methods as needed */}
      </div>
    </div>
  );
};

export default PaymentOptions;
