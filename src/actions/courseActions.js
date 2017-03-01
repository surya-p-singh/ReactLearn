import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses){
  console.log('courses:',courses);
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

  return function (dispatch, getState) {
    return courseApi.deleteCourse(course.id).then(() => {
      dispatch(loadCourses());
    }).catch(error =>{
      throw (error);
    });
  };
}

export function sortCourses(sortCriteria){

  return function (dispatch, getState) {
    var state = getState();
    var sortedCourses = state.courses.slice(0);
    sortedCourses.sort(function (a, b) {
      console.log('a[sortCriteria]:', a[sortCriteria]);
      var x = a[sortCriteria].toString().toLowerCase();
      var y = b[sortCriteria].toString().toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });


    return dispatch(loadCoursesSuccess(sortedCourses));
  };
}
