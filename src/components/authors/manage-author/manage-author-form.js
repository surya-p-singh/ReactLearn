import React, {PropTypes} from 'react';
import TextInput from '../../common/TextInput';
import DateTextInput from '../../common/DateTextInput';

const ManageAuthorForm = ({author, onSave, onChange, onBlur, saving}) => {
  const isInputInvalid = (key) => {
    console.log(author);
    return author.validation[key].touched && author.validation[key].error;
  };

  const idSaveButtonDisabled = author.validation.isValid ? false : true;

  return (

    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("firstName")} /> <br/>

      <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("lastName")} /> <br/>


      <DateTextInput
        name="dateOfBirth"
        label="Date of birth"
        value={author.dateOfBirth}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("dateOfBirth")}/> <br/>

      <TextInput
        name="email"
        label="Email"
        value={author.emailAddress}
        onChange={onChange}
        onBlur={onBlur}
        error={isInputInvalid("emailAddress")} /> <br/>

      <input
        type="submit"
        disabled ={idSaveButtonDisabled}
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
