import * as types from './manageAuthorsConstant';
import {validate} from './manageAuthorValidation';
import AuthorApi from '../../../api/mockAuthorApi';

export const updateAuthorSuccess= (author) =>{
  return ({type: types.UPDATE_AUTHOR_SUCCESS, author});
};

export const saveAuthorSuccess= (author) =>{
  return ({type: types.SAVE_AUTHOR_SUCCESS, author});
};


export const saveAuthor = (author)=> {
  return (dipatch, getState) => {
    let authorInApiFormat = {
        firstName: author.firstName,
        lastName: author.lastName
      };

    return AuthorApi.saveAuthor(authorInApiFormat).then(savedAuthor => {
        debugger;
        let auhorInState = getState().author;
        auhorInState.id =  savedAuthor.id;
        author.id  ? dipatch(updateAuthorSuccess(auhorInState)) : dispatch(saveAuthorSuccess(auhorInState))
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

export const mapValidFields = (value) => {
  const validFields = {};

  for (const prop in value) {
    if (value.hasOwnProperty(prop)) {
      validFields[prop] = {
        error: ''
      };
    }
  }
  return validFields;
};

export const mapInvalidFields = (err) => {
  const mappedValidation = err.inner.reduce((o, val) => {
    o[val.path] = {
      error: val.message
    };
    return o;
  }, {});

  return Object.assign(mapValidFields(err.value), mappedValidation);
};


