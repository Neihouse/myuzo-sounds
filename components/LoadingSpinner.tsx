import React from 'react';
import styles from '../styles/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
