import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} MyUzo Sounds</p>
  </footer>
);

export default Footer;
