import React, { useState } from 'react';
import styles from '../styles/ProductUploader.module.css';

type ProductUploaderProps = {
  onUpload: (file: File, metadata: { name: string; price: number; imageUrl: string }) => void;
};

const ProductUploader: React.FC<ProductUploaderProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({ name: '', price: 0, imageUrl: '' });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files ? event.target.files[0] : null;
    setFile(newFile);
  };

  const handleMetadataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <form className={styles.productUploader} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={metadata.name} onChange={handleMetadataChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={metadata.price} onChange={handleMetadataChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" value={metadata.imageUrl} onChange={handleMetadataChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="file">Product Image:</label>
        <input type="file" id="file" name="file" accept="image/*" onChange={handleFileChange} required />
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUploader;
