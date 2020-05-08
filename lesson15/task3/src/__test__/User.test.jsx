import React from 'react';
import User from '../User';
import { shallow } from 'enzyme';

describe('<User />', () => {
  it ('should render name and age', () => {
    const props = {
      name: 'Tom',
      age: 23,
    };
    const wrappedComponent = shallow(<User {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })
});