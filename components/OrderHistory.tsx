import React from 'react';
import OrderDetails from './OrderDetails';
import styles from '../styles/OrderHistory.module.css';

type OrderHistoryProps = {
  orders: Array<{
    id: string;
    date: string;
    status: string;
    items: Array<{
      id: string;
      title: string;
      quantity: number;
    }>;
    total: number;
  }>;
};

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <div className={styles.orderHistory}>
      <h2>Order History</h2>
      {orders.map((order) => (
        <OrderDetails key={order.id} {...order} />
      ))}
    </div>
  );
};

export default OrderHistory;
