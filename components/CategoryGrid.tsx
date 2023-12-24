import React from 'react';
import CategoryCard from './CategoryCard';
import styles from '../styles/CategoryGrid.module.css';

type CategoryGridProps = {
  categories: Array<{
    name: string;
    description: string;
    imageUrl: string;
  }>;
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className={styles.categoryGrid}>
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
