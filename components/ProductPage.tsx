import React from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import styles from '../styles/ProductPage.module.css';

type ProductPageProps = {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  reviews: Array<{
    id: string;
    author: string;
    content: string;
    rating: number;
  }>;
  onAddToCart: (id: string) => void;
  onReviewSubmit: (review: { author: string; content: string; rating: number }) => void;
};

const ProductPage: React.FC<ProductPageProps> = ({ product, reviews, onAddToCart, onReviewSubmit }) => {
  return (
    <div className={styles.productPage}>
      <ProductDetails {...product} onAddToCart={onAddToCart} />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={onReviewSubmit} />
    </div>
  );
};

export default ProductPage;
