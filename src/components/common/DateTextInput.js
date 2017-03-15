import React, {PropTypes} from 'react';

const DateTextInput = ({name, label, onChange, placeholder, value, error, onBlur}) => {

  let wrapperClass = 'from-group';
  if(error && error.lengh >0)
    wrapperClass += " " + 'has-error';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="date"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}/>
        {error && <div className="alert alert-danger">{error}</div>}

      </div>
    </div>
  );
};


DateTextInput.propsTypes = {
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  placeholder:PropTypes.string,
  loading:PropTypes.string,
  errors:PropTypes.string
};

export default DateTextInput;
