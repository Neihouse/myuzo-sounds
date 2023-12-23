import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">
        MyUzo
      </Link>
    </div>
    <div className={styles.links}>
      <Link href="/about">
        About
      </Link>
      <Link href="/products">
        Products
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;