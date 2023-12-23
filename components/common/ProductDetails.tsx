import React from 'react';
import styles from '../styles/ProductDetails.module.css';

type ProductDetailsProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ id, name, price, imageUrl, onAddToCart }) => {
  return (
    <div className={styles.productDetails}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h1>{name}</h1>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
