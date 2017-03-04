import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import author from '../components/authors/ManageAuthors/manageAuthorsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  author
});

export default rootReducer;
