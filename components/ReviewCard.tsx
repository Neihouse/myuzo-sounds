import React from 'react';
import styles from '../styles/ReviewCard.module.css';

type ReviewCardProps = {
  author: string;
  content: string;
  rating: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ author, content, rating }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.rating}>Rating: {rating}</div>
    </div>
  );
};

export default ReviewCard;
