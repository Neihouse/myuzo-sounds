import * as Yup from 'yup';

export const purchaseSchema = Yup.object().shape({
  userId: Yup.string().required('User ID is required'),
  sampleIds: Yup.array().of(Yup.string()).required('Sample IDs are required'),
  totalPrice: Yup.number().required('Total price is required'),
  purchaseDate: Yup.date().default(() => new Date()),
});
