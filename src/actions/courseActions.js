import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSucess(courses){
  return { type:types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSucess(course){
  return { type:types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSucess(course){
  return { type:types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses(){
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
          dispatch(loadCoursesSucess(courses));
        }).catch(error =>{
            throw (error);
        });
    };
}

export function saveCourse(course){
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(saveCourse => {
      course.id ? dispatch(updateCourseSucess(saveCourse)): dispatch(createCourseSucess(course));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
