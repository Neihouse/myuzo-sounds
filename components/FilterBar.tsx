import React from 'react';
import styles from '../styles/FilterBar.module.css';

type FilterBarProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className={styles.filterBar}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`${styles.filterButton} ${selectedCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
