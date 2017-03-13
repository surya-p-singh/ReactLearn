import * as types from './show-authors-constant';
import initialState from './show-authors-state';

export default function showAuthorsReducer(state = initialState.authors, action){
  switch (action.type)
  {
    case types.LOAD_AUTHORS_SUCCESS:
      console.log('action.authors:', action.authors);
      return action.authors;
    default:
      return state;
  }
}
