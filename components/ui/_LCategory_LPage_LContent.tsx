import React from 'react';
import CategoryGrid from './CategoryGrid';
import styles from '../styles/CategoryPageContent.module.css';

type CategoryPageContentProps = {
  categories: Array<{
    name: string;
    description: string;
    imageUrl: string;
  }>;
};

const CategoryPageContent: React.FC<CategoryPageContentProps> = ({ categories }) => {
  return (
    <div className={styles.categoryPageContent}>
      <h1>Explore Categories</h1>
      <CategoryGrid categories={categories} />
    </div>
  );
};

export default CategoryPageContent;
