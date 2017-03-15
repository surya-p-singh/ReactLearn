import yup from 'yup';
  /*TODO : check date validations*/
const authorSchema = yup.object({
  firstName: yup.string().required('Required').min(4, 'Minimum of 4 characters allowed').max(30, 'Maximum of 30 characters allowed'),
  lastName: yup.string().required('Required').min(4, 'Minimum of 4 characters allowed').max(30, 'Maximum of 30 characters allowed'),
  /*dateOfBirth: yup.date().required('Required').min('01-01-1900', 'Date must not be 100 years ').max('15-03-2017', 'Date of birth should be before than today'),*/
  dateOfBirth: yup.date().required('Required'),
  emailAddress: yup.string().email().required('Email is required')
});

export const validate = (author) => {
  return authorSchema.validate(author, {
    abortEarly: false,
    stripUnknown: true
  });
};
