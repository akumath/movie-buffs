import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search />' , () => {
    it('should rander without errors', () => {
        const component = shallow(<Search />);
        const wrapper = component.find(`[data-test='form-inline']`);
        expect(wrapper.length).toBe(1)
    })
})