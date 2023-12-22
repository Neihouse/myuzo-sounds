import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategoryList.module.css';

type CategoryListProps = {
  categories: Array<{ id: string; name: string; }>,
  selectedCategoryId: string,
  onSelectCategory: (id: string) => void
};

const CategoryList: React.FC<CategoryListProps> = ({ categories, selectedCategoryId, onSelectCategory }) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map((category) => (
        <li
          key={category.id}
          className={selectedCategoryId === category.id ? styles.selected : ''}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
