
import * as types from './manageAuthorsConstant';
import initialState from './manageAuthorsInitialState';

export default function manageAuthorsReducer(state = initialState, action){
  switch (action.type)
  {
    case types.AUTHOR_TOUCHED:
      console.log(action)
      return action.key;
    default:
      return state;
  }
}
