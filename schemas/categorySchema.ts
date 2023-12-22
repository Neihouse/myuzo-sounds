import * as Yup from 'yup';

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Category name is required'),
  description: Yup.string().required('Category description is required'),
  imageUrl: Yup.string().url('Must be a valid URL').required('Image URL is required'),
});
