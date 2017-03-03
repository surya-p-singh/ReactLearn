import * as types from './showAuthorsConstant';
import AuthorApi from '../../../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return { type:types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors(){
  return function (dispatch) {
    /*dispatch(beginAjaxCall());*/
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error =>{
      throw (error);
    });
  };
}
