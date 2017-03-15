import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  id:'',
  firstName:'',
  lastName:'',
  dateOfBirth:'',
  emailAddress:'',
  validation: {
    isValid: false,
    error: '',
    firstName: {
      touched: false,
      error: ''
    },
    lastName: {
      touched: false,
      error: ''
    },
    dateOfBirth: {
      touched: false,
      error: ''
    },
    emailAddress: {
      touched: false,
      error: ''
    }
  }
});
