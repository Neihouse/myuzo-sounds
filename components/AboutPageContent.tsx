import React from 'react';
import styles from '../styles/AboutPageContent.module.css';

const AboutPageContent = () => {
  return (
    <div className={styles.aboutPageContent}>
      <h1>About Us</h1>
      <p>
        MyUzo Sounds is a platform dedicated to providing high-quality music samples for producers, musicians, and audio enthusiasts. Our mission is to inspire creativity and make music production accessible to everyone.
      </p>
      {/* More about us content will go here */}
    </div>
  );
};

export default AboutPageContent;
