import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.navigationBar}>
      <Link href="/">Home</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/about">About</Link>
      {/* Additional navigation links will go here */}
    </nav>
  );
};

export default NavigationBar;
