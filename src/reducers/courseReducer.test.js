import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

// redux test recorder api can be used for redux tests

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
      //arrage
      const initialState = [
        {title:'A'},
        {title:'B'},
      ];
      const newCourse = {title:'C'};

      const action = actions.createCourseSucess(newCourse);

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

    const action = actions.updateCourseSucess(updatedCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[2].title).toEqual('CC title');
  });
});
