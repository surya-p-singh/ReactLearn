import * as types from './manageAuthorsConstant';
import AuthorApi from '../../../api/mockAuthorApi';

export function formInputChange(key, value){
  return { type:types.AUTHOR_TOUCHED, key, value };
}

