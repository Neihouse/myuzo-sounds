import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - MyUzo Sounds</title>
        <meta name="description" content="Learn more about MyUzo Sounds" />
      </Head>

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>
          MyUzo Sounds is a leading provider of high-quality audio equipment and services.
          Our mission is to deliver exceptional sound experiences to our customers.
        </p>
      </main>
    </div>
  );
};

export default About;
