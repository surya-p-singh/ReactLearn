import yup from 'yup';

const courseSchema = yup.object({
  title: yup.string().required('Required').max(30, 'Maximum of 30 characters allowed'),
  category: yup.string().required('Required').max(30, 'Maximum of 30 characters allowed')
});

export const validate = (course) => {
  return courseSchema.validate(course, {
    abortEarly: false,
    stripUnknown: true
  });
};
