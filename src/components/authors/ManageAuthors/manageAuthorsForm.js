import React, {PropTypes} from 'react';
import TextInput from '../../common/TextInput';

const ManageAuthorForm = ({author, onSave, onChange, saving, errors, onBlur}) => {
  const isInputInvalid = (key) => {
    return author.validation[key].touched && author.validation[key].error;
  };
  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("firstName")} />

      <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("lastName")} />

      <input
        type="submit"
        disable={saving}
        className="btn btn-primary"
        value={saving ? 'Saving...': 'Save'}
        onClick={onSave}/>
    </form>
  );
};


ManageAuthorForm.propsTypes = {
  author:PropTypes.object.isRequired,
  onChange:PropTypes.func.isRequired,
  onSave:PropTypes.func.isRequired,
  saving:PropTypes.bool,
  errors:PropTypes.object
};

export default ManageAuthorForm;
