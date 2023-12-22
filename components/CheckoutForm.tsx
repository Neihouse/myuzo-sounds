import React, { useState } from 'react';
import styles from '../styles/CheckoutForm.module.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process checkout information
  };

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      {/* Form fields will go here */}
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
      <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
