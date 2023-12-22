import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

export default function FeedbackPage() {
  const handleSubmitFeedback = (feedback: { name: string; email: string; message: string }) => {
    // TODO: Implement feedback submission logic
    console.log('Feedback submitted', feedback);
  };

  return (
    <div>
      <h1>We value your feedback</h1>
      <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />
    </div>
  );
}