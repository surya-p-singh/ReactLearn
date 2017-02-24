import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(){
  const props = {
    course :{}, errors:{}, saving:false,
    onSave: ()=> {},
    onChange: ()=> {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />)
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  }
}

describe('CourseForm via React Test Util', () => {
    it('Render a from and h1', ()=> {
        const {output} = setup();
        expect(output.type).toBe('form');

        let [TextInput] = output.props.children;
        let {name,label} = TextInput.props;

        expect(name).toBe('title');
        expect(label).toBe('Title');
    })
});
