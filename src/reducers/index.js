import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import author from '../components/authors/manage-author/manage-author-reducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  author
});

export default rootReducer;
