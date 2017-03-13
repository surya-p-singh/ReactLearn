import * as types from './manage-author-constant';
import {validate} from './manage-author-validation';
import AuthorApi from '../../../api/mockAuthorApi';
import {mapValidFields, mapInvalidFields} from '../../../libs/action-util';

export const updateAuthorSuccess = (author) =>{
  return ({type: types.UPDATE_AUTHOR_SUCCESS, author});
};

export const existingAuthorLoaded =  (author) =>{
  return ({type: types.EXISTING_AUTHOR_LOADED, author});
};

export const saveAuthorSuccess= () =>{
  return ({type: types.SAVE_AUTHOR_SUCCESS});
};

export const savingAuthor= (author) =>{
  return async (distpatch) => {
      await distpatch({type: types.SAVING_AUTHOR, author})
      await distpatch(saveAuthorSuccess());
  };
};

export const updatingAuthor= (author) =>{
  return async (distpatch) => {
    await distpatch({type: types.UPDATING_AUTHOR, author})
    await distpatch(updateAuthorSuccess());
  };
};

export const saveAuthor = (author)=> {
  return (dispatch, getState) => {
    let authorInApiFormat = {
        firstName: author.firstName,
        lastName: author.lastName,
        id:author.id
      };
      return AuthorApi.saveAuthor(authorInApiFormat).then(savedAuthor => {
        let author = getState().author;
        author.id ? dispatch(updatingAuthor(savedAuthor)):  dispatch(savingAuthor(savedAuthor));
      })
      .catch(error => {
        throw error;
      });
  }
};


export const formValueUpdated = (key, value) => {
  return (dispatch, getState) => {
    dispatch({type:types.AUTHOR_UPDATED, key, value});
    dispatch(validateForm(getState().author));
  };
};


export const formValueTouched = (key, value) => {
  return (dispatch, getState) => {
    dispatch({type:types.AUTHOR_TOUCHED, key, value});
    dispatch(validateForm(getState().author));
  };
};

export const validateForm = (author) => {
  return async (dispatch, getState) => {
    try
    {
      const result = await validate(author);
      const mappedValidation = mapValidFields(result);
      mappedValidation.isValid = true;
      dispatch({type: types.AUTHOR_VALID, validationResult: {validation: mappedValidation}});

      return result;
    } catch (err) {
      const mappedValidation = mapInvalidFields(err);
      mappedValidation.isValid = false;
      dispatch({type: types.AUTHOR_INVALID, validationResult: {validation: mappedValidation}});
    }
  };
};




