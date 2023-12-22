import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send contact information
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={contactInfo.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={contactInfo.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={contactInfo.message} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
