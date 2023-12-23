import React from 'react';
import styles from '../styles/AudioPlayer.module.css';

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  return (
    <div className={styles.audioPlayer}>
      <audio controls src={src} />
    </div>
  );
};

export default AudioPlayer;
