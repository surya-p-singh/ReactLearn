import * as types from './show-courses-details-constants';
import courseApi from '../../../api/mockCourseApi';
import {beginAjaxCall} from '../../../actions/ajaxStatusActions';


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

export function loadCoursesSuccess(courses){
  return { type:types.LOAD_COURSES_SUCCESS, courses };
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

export function deleteCoursesSucess(){
  return { type:types.DELETE_COURSE_SUCCESS };
}

export function sortCourses(sortCriteria){
  return function (dispatch, getState) {
    var state = getState();
    var sortedCourses = state.showCoursesDetails.slice(0);
    sortedCourses.sort(function (a, b) {
      var x = a[sortCriteria].toString().toLowerCase();
      var y = b[sortCriteria].toString().toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    return dispatch(loadCoursesSuccess(sortedCourses));
  };
}

