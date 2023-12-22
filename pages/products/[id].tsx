import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Card, Button } from 'antd';
import { getProductById } from '../../lib/products';
import styles from '../../styles/Product.module.css';

export default function ProductPage({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Card title={product.title} bordered={false} style={{ width: 300 }}>
        <p>{product.description}</p>
        <Button type="primary">Add to Cart</Button>
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const product = await getProductById(id);
  return {
    props: { product },
  };
};
