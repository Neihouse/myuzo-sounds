import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <Link href="/">
      <a className={styles.navbarBrand}>MyUzo Sounds</a>
    </Link>
    <div className={styles.navbarMenu}>
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
