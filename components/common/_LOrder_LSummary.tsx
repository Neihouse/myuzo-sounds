import React from 'react';
import styles from '../styles/OrderSummary.module.css';

type OrderSummaryProps = {
  items: Array<{
    title: string;
    price: number;
    quantity: number;
  }>;
  total: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default OrderSummary;
