import Waiting from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

test('should render without crashing', () => {
    const office = {
        class:"test",
    }
    const people = 1;
    shallow(<Waiting office={office} people={people}/>);
});