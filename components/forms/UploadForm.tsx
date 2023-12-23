import React, { useState } from 'react';
import styles from '../styles/UploadForm.module.css';

type UploadFormProps = {
  onUpload: (file: File, title: string, description: string) => void;
};

const UploadForm: React.FC<UploadFormProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file && title && description) {
      onUpload(file, title, description);
    }
  };

  return (
    <form className={styles.uploadForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="file">Upload Sample:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Upload</button>
      </div>
    </form>
  );
};

export default UploadForm;
