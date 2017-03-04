
import * as types from './manageAuthorsConstant';
import {INITIAL_STATE} from './manageAuthorsInitialState';

export default function manageAuthorsReducer(state = INITIAL_STATE, action){
  switch (action.type)
  {
    case types.AUTHOR_TOUCHED:
      return state.set(action.key, action.value);
    default:
      return state;
  }
}
