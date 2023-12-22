import React from 'react';
import SampleCard from './SampleCard';

type SampleItemProps = {
  sample: {
    id: string;
    title: string;
    imageUrl: string;
    audioUrl: string;
  };
  onSampleSelect: (sampleId: string) => void;
};

const SampleItem: React.FC<SampleItemProps> = ({ sample, onSampleSelect }) => {
  const handlePlay = () => {
    // Play the sample audio
  };

  const handleDownload = () => {
    // Download the sample
  };

  const handlePurchase = () => {
    // Initiate purchase process
  };

  return (
    <SampleCard
      sample={sample}
      onPlay={handlePlay}
      onDownload={handleDownload}
      onPurchase={handlePurchase}
    />
  );
};

export default SampleItem;
