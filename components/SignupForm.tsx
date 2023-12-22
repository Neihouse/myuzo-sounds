import React, { useState } from 'react';
import styles from '../styles/SignupForm.module.css';

type SignupFormProps = {
  onSignup: (user: { username: string; email: string; password: string }) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(user);
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={user.username} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
