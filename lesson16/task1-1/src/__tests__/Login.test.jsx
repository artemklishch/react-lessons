import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login', () => {
  it ('should display user greeting', () => {
    const wrappedComponent = shallow(<Login />);
    
    expect(wrappedComponent).toMatchSnapshot();
  })
});