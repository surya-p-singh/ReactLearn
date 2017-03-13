import expect from 'expect';
import courseReducer from './manage-course-reducer';
import * as actions from './manage-course-actions';

// redux test recorder api can be used for redux tests

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
      //arrage
      const initialState = [
        {title:'A'},
        {title:'B'},
      ];
      const newCourse = {title:'C'};

      const action = actions.createCourseSuccess(newCourse);

      //act
      const newState = courseReducer(initialState, action);

      //assert
      expect(newState.length).toEqual(3);
      expect(newState[0].title).toEqual('A');
      expect(newState[1].title).toEqual('B');
      expect(newState[2].title).toEqual('C');
    });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    //arrage
    const initialState = [
      {id:'A', title:'A title'},
      {id:'B', title:'B title'},
      {id:'C', title:'C title'},
    ];
    const updatedCourse = {id:'C', title:'CC title'};

    const action = actions.updateCourseSuccess(updatedCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[2].title).toEqual('CC title');
  });
});
