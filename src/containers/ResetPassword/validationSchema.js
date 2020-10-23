import * as Yup from 'yup';

export const validation = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('this field is required'),
});
