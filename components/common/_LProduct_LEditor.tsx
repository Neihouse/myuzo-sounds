import React, { useState } from 'react';
import styles from '../styles/ProductEditor.module.css';

type ProductEditorProps = {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  onSave: (product: { id: string; name: string; price: number; imageUrl: string }) => void;
};

const ProductEditor: React.FC<ProductEditorProps> = ({ product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(editedProduct);
  };

  return (
    <form className={styles.productEditor} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleInputChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={editedProduct.price} onChange={handleInputChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" value={editedProduct.imageUrl} onChange={handleInputChange} required />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProductEditor;
