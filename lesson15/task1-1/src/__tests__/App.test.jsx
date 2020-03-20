import React from 'react';
import App from '../App';
// import { shallow } from 'jest-enzyme';
import { render } from '@testing-library/react';


describe('<App />', () => {
  it('should display Todo List', () => {
    const wrappedComponent = render(<App />);
    expect(wrappedComponent.find('TodoList').exists()).toBeTruthy()
  })
});
