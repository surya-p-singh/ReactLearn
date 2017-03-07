import yup from 'yup';

const authorSchema = yup.object({
  firstName: yup.string().required('Required').min(4, 'Minimum of 4 characters allowed').max(30, 'Maximum of 30 characters allowed'),
  lastName: yup.string().required('Required').min(4, 'Minimum of 4 characters allowed').max(30, 'Maximum of 30 characters allowed')
});

export const validate = (author) => {
  return authorSchema.validate(author, {
    abortEarly: false,
    stripUnknown: true
  });
};
