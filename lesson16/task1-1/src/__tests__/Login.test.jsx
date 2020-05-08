import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login', () => {
  it ('should check call of func on click on Login btn', () => {
    const mockLogin = jest.fn();
    const wrappedComponent = shallow(<Login isLogin={mockLogin} />);
    wrappedComponent.find('.login').simulate('click');
    expect(mockLogin).toBeCalled();
  })
});