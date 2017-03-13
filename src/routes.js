import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/show-courses-details/show-course-page';
import ManageCoursePage from './components/course/manage-course/manage-course-page';   // eslint-disable-line import/no-named-as-default
import ManageAuthorsPage from './components/authors/manage-author';   // eslint-disable-line import/no-named-as-default
import ShowAuthors from './components/authors/show-authors-details';   // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="courses" component={CoursesPage} />
      <Route path="course/" component={ManageCoursePage} />
      <Route path="course/:id" component={ManageCoursePage} />
      <Route path="about" component={AboutPage} />
      <Route path="authors" component={ShowAuthors} />
      <Route path="author" component={ManageAuthorsPage} />
      <Route path="author/:id" component={ManageAuthorsPage} />
  </Route>
);
