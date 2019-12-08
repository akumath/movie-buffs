import React from 'react'
import { configure, shallow } from 'enzyme';
import MovieList from './MovieList';
import Movie from './movie/Movie'

// configure and connect enzyme
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('<MovieList />', () => {
    it('<Movie /> is not render', () => {
        const wrapper = shallow(<MovieList filteredData/>);
        console.log(wrapper)
        expect(wrapper.length).toBe(1);
    })
})