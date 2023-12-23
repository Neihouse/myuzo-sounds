import React from 'react';
import Link from 'next/link';
import styles from '../styles/UserWishlist.module.css';

type WishlistItem = {
  id: string;
  title: string;
  imageUrl: string;
};

type UserWishlistProps = {
  wishlist: Array<WishlistItem>;
  onRemove: (id: string) => void;
};

const UserWishlist: React.FC<UserWishlistProps> = ({ wishlist, onRemove }) => {
  return (
    <div className={styles.userWishlist}>
      <h2>My Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <span>{item.title}</span>
            <Link href={`/samples/${item.id}`}>View</Link>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserWishlist;
