import React from 'react';
import styles from '../styles/TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.termsOfService}>
      <h1>Terms of Service</h1>
      <p>
        By accessing the website at MyUzo Sounds, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with unknown applicable local laws.
      </p>
      {/* Full terms of service content will go here */}
    </div>
  );
};

export default TermsOfService;
