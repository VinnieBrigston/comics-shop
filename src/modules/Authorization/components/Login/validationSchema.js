import * as Yup from 'yup';

export const validation = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .required('this field is required'),
  password: Yup.string()
    .required('password could not be empty'),
});
