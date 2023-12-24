import React from 'react';
import ReviewCard from './ReviewCard';
import styles from '../styles/ReviewList.module.css';

type Review = {
  id: string;
  author: string;
  content: string;
  rating: number;
};

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className={styles.reviewList}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
