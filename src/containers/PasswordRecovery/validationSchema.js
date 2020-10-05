import * as Yup from 'yup';

export const validation = Yup.object({
  password: Yup.string()
    .required('Password could not be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password could not be empty'),
});
