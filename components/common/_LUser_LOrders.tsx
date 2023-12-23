import React from 'react';
import styles from '../styles/UserOrders.module.css';

type Order = {
  id: string;
  date: string;
  total: number;
  items: Array<{ id: string; title: string; quantity: number; }>
};

type UserOrdersProps = {
  orders: Array<Order>;
};

const UserOrders: React.FC<UserOrdersProps> = ({ orders }) => {
  return (
    <div className={styles.userOrders}>
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>Order ID: {order.id}</span>
            <span>Date: {order.date}</span>
            <span>Total: ${order.total.toFixed(2)}</span>
            <div>
              {order.items.map((item) => (
                <div key={item.id}>{item.title} (x{item.quantity})</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserOrders;
