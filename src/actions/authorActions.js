import * as types from './actionTypes'
import AuthorApi from '../api/mockAuthorApi';


export function loadAuthorsSucess(authors){
  return {
    type:types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors(){
  return function (dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSucess(authors));
    }).catch(error =>{
      throw (error);
    });
  };
}
