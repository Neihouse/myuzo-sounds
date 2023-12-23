import React, { useState } from 'react';
import styles from '../styles/UserSettings.module.css';

type UserSettingsProps = {
  onSave: (settings: { emailNotifications: boolean; theme: string }) => void;
};

const UserSettings: React.FC<UserSettingsProps> = ({ onSave }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    theme: 'light',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <form className={styles.userSettings} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="emailNotifications">Email Notifications:</label>
        <input
          type="checkbox"
          id="emailNotifications"
          name="emailNotifications"
          checked={settings.emailNotifications}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" name="theme" value={settings.theme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default UserSettings;
