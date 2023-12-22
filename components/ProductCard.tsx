import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';
import styles from '../styles/ProductCard.module.css';

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, imageUrl }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={title} src={imageUrl} />}
    className={styles.productCard}
  >
    <Card.Meta title={<Link href={`/products/${id}`}>{title}</Link>} description={description} />
  </Card>
);

export default ProductCard;
