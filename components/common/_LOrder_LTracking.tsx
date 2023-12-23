import React from 'react';
import styles from '../styles/OrderTracking.module.css';

type OrderTrackingProps = {
  orderId: string;
  status: string;
  estimatedDelivery: string;
};

const OrderTracking: React.FC<OrderTrackingProps> = ({ orderId, status, estimatedDelivery }) => {
  return (
    <div className={styles.orderTracking}>
      <h2>Order Tracking</h2>
      <p>Order ID: {orderId}</p>
      <p>Status: {status}</p>
      <p>Estimated Delivery: {estimatedDelivery}</p>
    </div>
  );
};

export default OrderTracking;
