
import * as types from './manageAuthorsConstant';
import {INITIAL_STATE} from './manageAuthorsInitialState';

export default function manageAuthorsReducer(state = INITIAL_STATE, action){
  switch (action.type)
  {
    case types.SAVE_AUTHOR_SUCCESS:
      console.log('inside:', action.author)
      //TODO: Find proper way to replace object
      return state.merge({'firstName':  action.author.firstName,'lastName': action.author.lastName});
    case types.SAVING_AUTHOR:
      state.set("id", action.id);
      return state;
    case types.UPDATE_AUTHOR_SUCCESS:
      return [
        ...state.authors.filter(author => author.id !== action.author.id), Object.assign({}, action)
      ];
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
