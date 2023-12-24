import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

type ProductListProps = {
  products: Array<{
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }>;
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
