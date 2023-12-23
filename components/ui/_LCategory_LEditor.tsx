import React, { useState } from 'react';
import styles from '../styles/CategoryEditor.module.css';

type CategoryEditorProps = {
  category: {
    id: string;
    name: string;
    description: string;
  };
  onSave: (category: { id: string; name: string; description: string }) => void;
};

const CategoryEditor: React.FC<CategoryEditorProps> = ({ category, onSave }) => {
  const [editedCategory, setEditedCategory] = useState(category);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(editedCategory);
  };

  return (
    <form className={styles.categoryEditor} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Category Name:</label>
        <input type="text" id="name" name="name" value={editedCategory.name} onChange={handleInputChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={editedCategory.description} onChange={handleInputChange} required />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default CategoryEditor;
