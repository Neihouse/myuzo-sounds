import React, { useState } from 'react';
import ProductUploader from './ProductUploader';
import ProductEditor from './ProductEditor';
import styles from '../styles/ProductManager.module.css';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductManagerProps = {
  products: Product[];
  onUpload: (file: File, metadata: { name: string; price: number; imageUrl: string }) => void;
  onSave: (product: Product) => void;
};

const ProductManager: React.FC<ProductManagerProps> = ({ products, onUpload, onSave }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleProductSave = (editedProduct: Product) => {
    onSave(editedProduct);
    setSelectedProduct(null); // Deselect product after saving
  };

  return (
    <div className={styles.productManager}>
      <h2>Product Manager</h2>
      <ProductUploader onUpload={onUpload} />
      {selectedProduct && (
        <ProductEditor product={selectedProduct} onSave={handleProductSave} />
      )}
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductSelect(product)}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
