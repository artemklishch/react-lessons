import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';
import { getUsersList } from '../usersGateway';

jest.mock('../usersGateway', () => {
  return {
    getUsersList: jest.fn(() => Promise.resolve()),
  };
})

describe('User', () => {
  it('should not render if state is empty', () => {
    const wrappedComponent = shallow(<User />);
    expect(wrappedComponent.find('.user').exists()).toEqual(false);
  })

  it('should render if state has data', () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      user: {
        avatar_url: 'https://example.com',
        name: 'Tom',
        location: 'PlanetEarth',
      }
    });
    // expect(wrappedComponent.find('.user').exists()).toEqual(true);
    expect(wrappedComponent.find('.user')).toMatchSnapshot();
  })

  it('should render if state has data', () => {
    expect(getUsersList).toBeCalled();
  })
});