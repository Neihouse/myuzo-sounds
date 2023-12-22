import React from 'react';
import Link from 'next/link';
import styles from '../styles/GenreList.module.css';

const genres = [
  'Hip Hop',
  'Electronic',
  'Rock',
  'Jazz',
  'Classical',
  // Add more genres as needed
];

const GenreList = () => {
  return (
    <ul className={styles.genreList}>
      {genres.map((genre) => (
        <li key={genre}>
          <Link href={`/categories/${genre.toLowerCase()}`}>{genre}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
