import React from 'react';
import SampleGrid from './SampleGrid';
import styles from '../styles/SamplePageContent.module.css';

type SamplePageContentProps = {
  samples: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
  }>;
};

const SamplePageContent: React.FC<SamplePageContentProps> = ({ samples }) => {
  return (
    <div className={styles.samplePageContent}>
      <h1>Latest Samples</h1>
      <SampleGrid samples={samples} />
    </div>
  );
};

export default SamplePageContent;
