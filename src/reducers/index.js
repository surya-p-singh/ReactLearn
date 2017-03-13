import {combineReducers} from 'redux';
import courses from './courseReducer';
import showCoursesDetails from '../components/course/show-courses-details/show-courses-details-reducer';
import manageCourse from '../components/course/manage-course/manage-course-reducer';
import authors from './authorReducer';
import author from '../components/authors/manage-author/manage-author-reducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  author,
  showCoursesDetails,
  manageCourse
});

export default rootReducer;
