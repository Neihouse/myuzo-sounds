import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <Menu mode="horizontal" theme="dark" className={styles.navbar}>
      <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item key="shop" icon={<ShoppingCartOutlined />}>Shop</Menu.Item>
      <Menu.Item key="account" icon={<UserOutlined />}>Account</Menu.Item>
    </Menu>
  );
};

export default Navbar;
