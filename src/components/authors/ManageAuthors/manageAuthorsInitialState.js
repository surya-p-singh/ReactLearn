import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  id:'',
  firstName:'',
  lastName:'',
  errors:{
    firstName:'',
    lastName:''
  }
});
