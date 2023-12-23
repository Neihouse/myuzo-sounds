import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/ProductPageLayout.module.css';

type ProductPageLayoutProps = {
  children: React.ReactNode;
};

const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.productPageLayout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ProductPageLayout;
