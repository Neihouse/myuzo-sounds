import React, { useState } from 'react';
import styles from '../styles/ResetPasswordForm.module.css';

type ResetPasswordFormProps = {
  onResetPassword: (email: string) => void;
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onResetPassword(email);
  };

  return (
    <form className={styles.resetPasswordForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
