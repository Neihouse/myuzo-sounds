import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategorySelector.module.css';

type CategorySelectorProps = {
  categories: Array<{ name: string; }>,
  selectedCategory: string,
  onSelectCategory: (category: string) => void
};

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className={styles.categorySelector}>
      {categories.map((category) => (
        <button
          key={category.name}
          className={selectedCategory === category.name ? styles.selected : ''}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
