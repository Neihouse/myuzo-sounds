import React from 'react';
import SampleCard from './SampleCard';
import styles from '../styles/SampleGrid.module.css';

type SampleGridProps = {
  samples: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
  }>;
};

const SampleGrid: React.FC<SampleGridProps> = ({ samples }) => {
  return (
    <div className={styles.sampleGrid}>
      {samples.map((sample) => (
        <SampleCard key={sample.id} {...sample} />
      ))}
    </div>
  );
};

export default SampleGrid;
