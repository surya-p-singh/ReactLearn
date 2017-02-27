import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses){
  return { type:types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course){
  return { type:types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course){
  return { type:types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCoursesSucess(){
  return { type:types.DELETE_COURSE_SUCCESS };
}


export function loadCourses(){
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
          dispatch(loadCoursesSuccess(courses));
        }).catch(error =>{
            throw (error);
        });
    };
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

export function deleteCourse(course){
  console.log('course:', course);
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.deleteCourse(course.id).then(() => {
      console.log('in promise');
      dispatch(loadCourses());
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
