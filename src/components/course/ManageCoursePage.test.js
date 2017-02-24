
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';


describe('Manage Course Page', () => {

  it('sets error message when trying to save empty title', () => {

      const props ={
        course: {id: '', watchHref:'', title:'', authorId:'', length:'', category:''},
        actions: {saveCourse: ()=> { return Promise.resolve();}},
        authors: []
      };

      const wrapper = mount(<ManageCoursePage {...props} />);
      const saveButton = wrapper.find('input').last();
      expect(saveButton.prop('type')).toBe('submit');

      saveButton.simulate('click');
      console.log(wrapper.state())
      expect(wrapper.state().errors.title).toBe('sdsd');
  });

});
