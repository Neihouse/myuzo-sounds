import React from 'react';
import Link from 'next/link';
import styles from '../styles/SampleCard.module.css';

type SampleCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
};

const SampleCard: React.FC<SampleCardProps> = ({ id, title, description, imageUrl, audioUrl }) => {
  return (
    <div className={styles.sampleCard}>
      <img src={imageUrl} alt={title} />
      <div className={styles.sampleInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <audio controls src={audioUrl} />
        <Link href={`/samples/${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default SampleCard;
