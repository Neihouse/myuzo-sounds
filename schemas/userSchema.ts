import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  purchases: Yup.array().of(Yup.string()), // Array of purchase IDs
  wishlist: Yup.array().of(Yup.string()), // Array of sample IDs
});
