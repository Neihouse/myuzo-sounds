import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()} MyUzo Sounds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
