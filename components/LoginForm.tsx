import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

type LoginFormProps = {
  onLogin: (credentials: { email: string; password: string }) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
