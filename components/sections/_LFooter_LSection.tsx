import React from 'react';
import Link from 'next/link';
import styles from '../../styles/FooterSection.module.css';

const FooterSection = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p>&copy; {new Date().getFullYear()} Myuzo Sounds. All rights reserved.</p>
      <div className={styles.linksContainer}>
        <Link href="/privacy" legacyBehavior><a className={styles.link}>Privacy Policy</a></Link>
        <Link href="/terms" legacyBehavior><a className={styles.link}>Terms of Service</a></Link>
      </div>
    </div>
  </footer>
);

export default FooterSection;
