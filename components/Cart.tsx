import React from 'react';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';

type CartProps = {
  items: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
  }>;
  onItemRemove: (id: string) => void;
  onCheckout: () => void;
};

const Cart: React.FC<CartProps> = ({ items, onItemRemove, onCheckout }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => onItemRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</div>
      <div className={styles.checkoutButton}>
        <button onClick={onCheckout}>Checkout</button>
      </div>
      <div className={styles.continueShopping}>
        <Link href="/categories">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
