import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './manage-course-form';

function setup(saving){
  const props = {
    course :{}, errors:{}, saving:saving,
    onSave: ()=> {},
    onChange: ()=> {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Util', () => {
    it('Render a from and h1', ()=> {
        const {output} = setup();
        expect(output.type).toBe('form');

        let h1 = output.props.children[0];
        expect(h1.props.children).toEqual('Manage Courses');

        let TextInput = output.props.children[1];
        let {name,label} = TextInput.props;

        expect(name).toBe('title');
        expect(label).toBe('Title');
    });

    it('save button is labeled "Save" when not saving', ()=>{
        const {output} = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
      });

    it('save button is labeled "Saving..." when saving', ()=>{
      const {output} = setup(true);
      const submitButton = output.props.children[5];
      expect(submitButton.props.value).toBe('Saving...');
    });
});
