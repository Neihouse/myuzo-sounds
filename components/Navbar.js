import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">
        <a>MyUzo</a>
      </Link>
    </div>
    <div className={styles.links}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;