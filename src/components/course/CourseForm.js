import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {

  return (
    <form>
      <h1>Manage Courses</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="submit"
        disable={saving}
        className="btn btn-primary"
        value={saving ? 'Saving...': 'Save'}
        onClick={onSave}/>
    </form>
  );
}


CourseForm.propsTypes = {
  course:PropTypes.object.isRequired,
  allAuthors:PropTypes.array,
  course:PropTypes.func.isRequired,
  onSave:PropTypes.func.isRequired,
  saving:PropTypes.bool,
  errors:PropTypes.object
};

export default CourseForm;
