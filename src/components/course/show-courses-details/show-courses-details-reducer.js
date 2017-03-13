import * as types from './show-courses-details-constants';
import initialState from './show-courses-details-initial-state';


export default function courseReducer(state =initialState, action){
  switch (action.type)
  {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_SUCCESS:
      return state;
    default:
      return state;
  }
}
