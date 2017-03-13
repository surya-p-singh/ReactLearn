
import * as types from './manage-author-constant';
import {INITIAL_STATE} from './manage-author-state';

export default function manageAuthorsReducer(state = INITIAL_STATE, action){
  switch (action.type)
  {
    case types.SAVE_AUTHOR_SUCCESS:
    case types.UPDATE_AUTHOR_SUCCESS:
      return state.merge(INITIAL_STATE);
    case types.EXISTING_AUTHOR_LOADED:
      return state.merge(action.author);
    case types.SAVING_AUTHOR:
      return state.set("id", action.id);
    case types.UPDATING_AUTHOR:
      return state.merge(action.author);
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
