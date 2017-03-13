import {combineReducers} from 'redux';

import authors from '../components/authors/show-authors-details/show-authors-reducer';
import author from '../components/authors/manage-author/manage-author-reducer';

import manageCourse from '../components/course/manage-course/manage-course-reducer';
import courses from '../components/course/show-courses-details/show-courses-details-reducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  author,
  authors,
  manageCourse,
  courses
});

export default rootReducer;
