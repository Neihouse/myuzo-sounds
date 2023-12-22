import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Myuzo Sounds</title>
        <meta name="description" content="Get in touch with Myuzo Sounds. We're here to help with any questions or feedback you may have." />
      </Head>
      <h1 className={styles.title}>Contact Us</h1>
      <ContactForm />
      {/* TODO: Add additional contact information or a map here */}
    </div>
  );
}
