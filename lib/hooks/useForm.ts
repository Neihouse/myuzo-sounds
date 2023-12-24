import { useState } from 'react';

interface FormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
}

export function useForm<T>(options: FormOptions<T>) {
  const [values, setValues] = useState<T>(options.initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    options.onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}
