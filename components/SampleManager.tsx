import React, { useState } from 'react';
import SampleUploader from './SampleUploader';
import SampleEditor from './SampleEditor';
import styles from '../styles/SampleManager.module.css';

type Sample = {
  id: string;
  title: string;
  description: string;
  category: string;
};

type SampleManagerProps = {
  samples: Sample[];
  categories: Array<{ name: string; }>
  onUpload: (file: File, metadata: { title: string; description: string; category: string }) => void;
  onSave: (sample: Sample) => void;
};

const SampleManager: React.FC<SampleManagerProps> = ({ samples, categories, onUpload, onSave }) => {
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);

  const handleSampleSelect = (sample: Sample) => {
    setSelectedSample(sample);
  };

  const handleSampleSave = (editedSample: Sample) => {
    onSave(editedSample);
    setSelectedSample(null); // Deselect sample after saving
  };

  return (
    <div className={styles.sampleManager}>
      <h2>Sample Manager</h2>
      <SampleUploader onUpload={onUpload} categories={categories} />
      {selectedSample && (
        <SampleEditor sample={selectedSample} onSave={handleSampleSave} categories={categories} />
      )}
      <div className={styles.sampleList}>
        {samples.map((sample) => (
          <div key={sample.id} onClick={() => handleSampleSelect(sample)}>
            {sample.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleManager;
