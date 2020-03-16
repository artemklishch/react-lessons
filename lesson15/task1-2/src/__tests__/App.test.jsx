import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should display Todo List', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('TodoList').exists()).toBeTruthy()
  })
});