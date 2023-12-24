import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from '../../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.mainContainer}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
