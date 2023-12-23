import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from '../styles/SocialMediaLinks.module.css';

const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
