import React, { useState } from 'react';
import CategoryCreator from './CategoryCreator';
import CategoryEditor from './CategoryEditor';
import styles from '../styles/CategoryManager.module.css';

type Category = {
  id: string;
  name: string;
  description: string;
};

type CategoryManagerProps = {
  categories: Category[];
  onCreate: (category: { name: string; description: string }) => void;
  onSave: (category: Category) => void;
};

const CategoryManager: React.FC<CategoryManagerProps> = ({ categories, onCreate, onSave }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleCategorySave = (editedCategory: Category) => {
    onSave(editedCategory);
    setSelectedCategory(null); // Deselect category after saving
  };

  return (
    <div className={styles.categoryManager}>
      <h2>Category Manager</h2>
      <CategoryCreator onCreate={onCreate} />
      {selectedCategory && (
        <CategoryEditor />
      )}
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <div key={category.id} onClick={() => handleCategorySelect(category)}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;
