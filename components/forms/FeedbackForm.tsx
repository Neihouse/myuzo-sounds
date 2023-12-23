import React, { useState } from 'react';
import styles from '../styles/FeedbackForm.module.css';

type FeedbackFormProps = {
  onSubmitFeedback: (feedback: { name: string; email: string; message: string }) => void;
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmitFeedback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitFeedback({ name, email, message });
  };

  return (
    <form className={styles.feedbackForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Submit Feedback</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
