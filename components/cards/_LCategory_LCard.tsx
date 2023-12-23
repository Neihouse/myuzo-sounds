import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategoryCard.module.css';

type CategoryCardProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className={styles.categoryCard}>
      <img src={imageUrl} alt={name} />
      <div className={styles.categoryInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href={`/categories/${name.toLowerCase()}`}>Explore</Link>
      </div>
    </div>
  );
};

export default CategoryCard;
