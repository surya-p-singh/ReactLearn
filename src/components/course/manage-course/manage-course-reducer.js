import * as types from './manage-course-constants';
import initialState from './manage-course-initial-state';

export default function manageCourseReducer(state =initialState.courses, action){
  switch (action.type)
  {
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE:
      return [
        ...state, Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
