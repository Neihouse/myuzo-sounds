import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <Link href={`/products/${id}`}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductCard;
