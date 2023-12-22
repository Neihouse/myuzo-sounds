import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Myuzo Sounds</title>
        <meta name="description" content="Learn more about Myuzo Sounds, our mission, and the team behind the high-quality music samples." />
      </Head>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Myuzo Sounds is the premier destination for high-quality music samples. Our mission is to provide
        music creators with the resources they need to produce outstanding work. Whether you're a professional
        producer or just starting out, you'll find a wide selection of samples that fit your creative needs.
      </p>
      {/* TODO: Add team member profiles or company history here */}
    </div>
  );
}
