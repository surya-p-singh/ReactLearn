import expect from 'expect';
import React from 'react';
import * as commonTypes from '../../../actions/actionTypes';
import * as types from './manage-course-constants';
import * as courseActions from './manage-course-actions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrage
      const course = {id: 'Clean-code', title: 'Clean Code'};
      const expectedAction = {
          type: types.CREATE_COURSE_SUCCESS,
          course: course
        };

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

