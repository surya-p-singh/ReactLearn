import * as types from './manage-course-constants';
import courseApi from '../../../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from '../../../actions/ajaxStatusActions';

export function createCourseSuccess(course){
  return { type:types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course){
  return { type:types.UPDATE_COURSE_SUCCESS, course };
}

export function saveCourse(course){
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)):
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export const formValueUpdated = (index, key, value) => {
  return (dispatch, getState) => {
    dispatch({type: types.UPDATE_COURSE_SUCCESS, index, key, value});
    dispatch(validateForm(getState().inviteUsersForm.invitees[index], index));
  };
};

