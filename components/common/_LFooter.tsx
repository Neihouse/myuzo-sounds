import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/Footer.module.css';

<<<<<<< HEAD
const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className={styles.footer}>
      <p>© 2023 Myuzo Sounds. All rights reserved.</p>
    </AntFooter>
  );
};
=======
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
>>>>>>> 672a1f4b (Committing changes)

export default Footer;
