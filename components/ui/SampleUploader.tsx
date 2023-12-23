import React, { useState } from 'react';
import styles from '../styles/SampleUploader.module.css';

type SampleUploaderProps = {
  onUpload: (file: File, metadata: { title: string; description: string; category: string }) => void;
  categories: Array<{ name: string; }>
};

const SampleUploader: React.FC<SampleUploaderProps> = ({ onUpload, categories }) => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({ title: '', description: '', category: categories[0].name });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files ? event.target.files[0] : null;
    setFile(newFile);
  };

  const handleMetadataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setMetadata({ ...metadata, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      onUpload(file, metadata);
    }
  };

  return (
    <form className={styles.sampleUploader} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={metadata.title} onChange={handleMetadataChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={metadata.description} onChange={handleMetadataChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={metadata.category} onChange={handleMetadataChange} required>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="file">Sample File:</label>
        <input type="file" id="file" name="file" accept="audio/*" onChange={handleFileChange} required />
      </div>
      <button type="submit">Upload Sample</button>
    </form>
  );
};

export default SampleUploader;
