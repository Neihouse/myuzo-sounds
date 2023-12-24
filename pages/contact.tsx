import React from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - MyUzo Sounds</title>
        <meta name="description" content="Get in touch with MyUzo Sounds" />
      </Head>

      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>
          Have questions or need support? Contact our team for assistance.
        </p>
        {/* Contact form or details go here */}
      </main>
    </div>
  );
};

export default Contact;
