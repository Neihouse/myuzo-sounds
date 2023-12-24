import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>&copy; {new Date().getFullYear()} Myuzo Sounds. All rights reserved.</span>
      <nav className={styles.nav}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
