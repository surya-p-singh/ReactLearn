import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  id:'',
  firstName:'',
  lastName:'',
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
    }
  }
});
