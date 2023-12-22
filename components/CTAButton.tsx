import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/CTAButton.module.css';

type CTAButtonProps = {
  text: string;
  onClick: () => void;
};

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <Button type="primary" className={styles.ctaButton} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CTAButton;
