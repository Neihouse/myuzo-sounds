import React, { useState } from 'react';
import styles from '../styles/SampleEditor.module.css';

type SampleEditorProps = {
  sample: {
    id: string;
    title: string;
    description: string;
    category: string;
  };
  onSave: (sample: { id: string; title: string; description: string; category: string }) => void;
  categories: Array<{ name: string; }>
};

const SampleEditor: React.FC<SampleEditorProps> = ({ sample, onSave, categories }) => {
  const [editedSample, setEditedSample] = useState(sample);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEditedSample({ ...editedSample, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(editedSample);
  };

  return (
    <form className={styles.sampleEditor} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={editedSample.title} onChange={handleInputChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={editedSample.description} onChange={handleInputChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={editedSample.category} onChange={handleInputChange} required>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default SampleEditor;
