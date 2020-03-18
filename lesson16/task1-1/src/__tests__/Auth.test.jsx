import React from 'react';
import { shallow } from 'enzyme';
import Auth from '../Auth';

describe('Auth', () => {
  it ('should display Loggin btn id user logged out', () => {
    const wrappedComponent = shallow(<Auth />);
    expect(wrappedComponent.find('Login').exists()).toBeTruthy();
  })
});