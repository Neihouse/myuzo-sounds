import React, { useState } from 'react';
import styles from '../styles/ReviewForm.module.css';

type ReviewFormProps = {
  onSubmit: (review: { author: string; content: string; rating: number }) => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [review, setReview] = useState({ author: '', content: '', rating: 5 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(review);
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="author">Name:</label>
        <input type="text" id="author" name="author" value={review.author} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Review:</label>
        <textarea id="content" name="content" value={review.content} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" name="rating" value={review.rating} onChange={handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
