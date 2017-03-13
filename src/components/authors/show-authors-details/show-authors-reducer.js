/**
 * Created by SuryaS on 03/03/2017.
 */
import * as types from './show-authors-constant';
import initialState from './show-authors-state';

export default function showAuthorsReducer(state = initialState.authors, action){
  switch (action.type)
  {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}