
export const mapValidFields = (value) => {
  const validFields = {};

  for (const prop in value) {
    if (value.hasOwnProperty(prop)) {
      validFields[prop] = {
        error: ''
      };
    }
  }
  return validFields;
};

export const mapInvalidFields = (err) => {
  const mappedValidation = err.inner.reduce((o, val) => {
    o[val.path] = {
      error: val.message
    };
    return o;
  }, {});

  return Object.assign(mapValidFields(err.value), mappedValidation);
};
