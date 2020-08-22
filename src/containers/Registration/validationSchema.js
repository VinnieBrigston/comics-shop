import * as Yup from 'yup';

export const validation = Yup.object({
  name: Yup.string()
    .required('this field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('this field is required'),
  password: Yup.string()
    .required('Password could not be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password could not be empty'),
});
