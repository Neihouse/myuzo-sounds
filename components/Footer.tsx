import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/Footer.module.css';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className={styles.footer}>
      <p>© 2023 Myuzo Sounds. All rights reserved.</p>
    </AntFooter>
  );
};

export default Footer;
