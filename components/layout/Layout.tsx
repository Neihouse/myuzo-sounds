import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.mainContainer}>{children}</main>
    <Footer />
  </div>
);

export default Layout;