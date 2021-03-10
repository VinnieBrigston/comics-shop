import * as Yup from 'yup';

export const validation = Yup.object({
  password: Yup.string()
    .required('password could not be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
    .required('password could not be empty'),
});
