import * as Yup from 'yup';

export const validation = Yup.object({
  name: Yup.string()
    .required('this field is required'),
  email: Yup.string()
    .email('invalid email address')
    .required('this field is required'),
  password: Yup.string()
    .required('password could not be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
    .required('password could not be empty'),
});
