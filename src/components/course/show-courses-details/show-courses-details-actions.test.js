import expect from 'expect';
import React from 'react';
import * as commonTypes from '../../../actions/actionTypes';
import * as types from './show-courses-details-constants';
import * as courseActions from './show-courses-details-actions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading course', (done) => {
    // Here an example to call nock
    // nock('https://api.fetch.me.com/')
    //   .getCourse('/courses')
    //    .reply(200, {body: {course [{}, {}]}});

    const extectedActions= [
      {type: commonTypes.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id:'clean-code', title:'Clean Code'}]}}
    ];

    const store = mockStore({courses:[]}, extectedActions);

    store.dispatch(courseActions.loadCourses()).then(()=>{
      const actions = store.getActions();
      expect(actions[0].type).toEqual(commonTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
