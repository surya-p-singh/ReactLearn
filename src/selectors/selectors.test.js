import expect from 'expect';
import React from 'react';
import {authorsFormattedByDropdown} from './selectors';

describe('Authors Selector:', () => {
  describe('Authors formatted for dropdown', () => {

    it('should return author data formatted for use in a dropdown', () => {
        const authors = [
            {id:'Surya-singh', firstName:'Surya', lastName:'Singh'},
            {id:'Aarav-singh', firstName:'Aarav', lastName:'Singh'}
        ];
        const expected = [
          {value:'Surya-singh', text:'Surya Singh'},
          {value:'Aarav-singh', text:'Aarav Singh'}
        ];

        expect(authorsFormattedByDropdown(authors)).toEqual(expected);
    });
  });
});
