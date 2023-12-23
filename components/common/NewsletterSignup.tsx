import React, { useState } from 'react';
import styles from '../styles/NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sign up for the newsletter
  };

  return (
    <div className={styles.newsletterSignup}>
      <h2>Stay Updated</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
