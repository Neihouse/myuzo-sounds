import React from 'react';
import styles from '../styles/OrderDetails.module.css';

type OrderDetailsProps = {
  orderId: string;
  date: string;
  status: string;
  items: Array<{
    id: string;
    title: string;
    quantity: number;
  }>;
  total: number;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, date, status, items, total }) => {
  return (
    <div className={styles.orderDetails}>
      <h2>Order Details</h2>
      <p>Order ID: {orderId}</p>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
      <h3>Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} (x{item.quantity})
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderDetails;
