import React from 'react';
import Link from 'next/link';
import styles from '../styles/SampleCard.module.css';

type SampleCardProps = {
  sample: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
  };
  onPlay: () => void;
  onDownload: () => void;
  onPurchase: () => void;
};

const SampleCard: React.FC<SampleCardProps> = ({ sample, onPlay, onDownload, onPurchase }) => {
  return (
    <div className={styles.sampleCard}>
      <img src={sample.imageUrl} alt={sample.title} />
      <div className={styles.sampleInfo}>
        <h3>{sample.title}</h3>
        <p>{sample.description}</p>
        <audio controls src={sample.audioUrl} />
        <Link href={`/samples/${sample.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default SampleCard;
