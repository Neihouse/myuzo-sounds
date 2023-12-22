import React from 'react';
import styles from '../styles/UserProfile.module.css';

type UserProfileProps = {
  username: string;
  email: string;
  // Additional user profile fields
};

const UserProfile: React.FC<UserProfileProps> = ({ username, email }) => {
  return (
    <div className={styles.userProfile}>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      {/* Additional user profile information will go here */}
    </div>
  );
};

export default UserProfile;
