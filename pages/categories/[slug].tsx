import React from 'react';
import { GetServerSideProps } from 'next';
import { Card } from 'antd';
import { getProductsByCategory } from '../../lib/products';
import styles from '../../styles/Category.module.css';

export default function CategoryPage({ products, category }) {
  return (
    <div className={styles.container}>
      <h1>{category} Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <Card key={product.id} title={product.title} bordered={false} style={{ width: 300 }}>
            <p>{product.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;
  const products = await getProductsByCategory(slug);
  const category = slug.replace(/-/g, ' ').toUpperCase();
  return {
    props: { products, category },
  };
};
