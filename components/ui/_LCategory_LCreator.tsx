import React, { useState } from 'react';
import styles from '../styles/CategoryCreator.module.css';

type CategoryCreatorProps = {
  onCreate: (category: { name: string; description: string }) => void;
};

const CategoryCreator: React.FC<CategoryCreatorProps> = ({ onCreate }) => {
  const [category, setCategory] = useState({ name: '', description: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate(category);
  };

  return (
    <form className={styles.categoryCreator} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Category Name:</label>
        <input type="text" id="name" name="name" value={category.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={category.description} onChange={handleChange} required />
      </div>
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CategoryCreator;
