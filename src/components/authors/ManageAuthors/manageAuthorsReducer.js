
import * as types from './manageAuthorsConstant';
import {INITIAL_STATE} from './manageAuthorsInitialState';

export default function manageAuthorsReducer(state = INITIAL_STATE, action){
  switch (action.type)
  {
    case types.AUTHOR_UPDATED:
      return state.set(action.key, action.value);
    case types.AUTHOR_TOUCHED:
      return state.setIn(['validation', action.key, 'touched'], true);
    case types.AUTHOR_VALID:
    case types.AUTHOR_INVALID:
      return state.merge(action.validationResult, {deep: true});
    default:
      return state;
  }
}
