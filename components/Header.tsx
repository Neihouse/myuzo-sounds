import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link href="/">Myuzo Sounds</Link>
    </div>
    <Menu mode="horizontal" defaultSelectedKeys={['home']} className={styles.menu}>
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="categories">
        <Link href="/categories">Categories</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link href="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  </header>
);

export default Header;
