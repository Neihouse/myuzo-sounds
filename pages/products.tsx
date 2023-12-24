import React from 'react';
import Head from 'next/head';
import styles from '../styles/Products.module.css';

const Products: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products - MyUzo Sounds</title>
        <meta name="description" content="Explore our high-quality audio products" />
      </Head>

      <main className={styles.main}>
        <h1>Our Products</h1>
        <p>
          Discover our wide range of audio equipment, designed to provide the best sound
          experience for all your needs.
        </p>
      </main>
    </div>
  );
};

export default Products;
