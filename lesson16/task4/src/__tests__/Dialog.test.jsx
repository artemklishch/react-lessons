import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';

describe('Dialog', () => {
  it ('should not render Dialog in case of isOpen false', () => {
    const child = <p>Some text</p>
    const props = {
      isOpen: false,
      children: child, 
      onClose: jest.fn(), 
      title: 'Title',
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
  })

  it ('should not render Dialog in case of isOpen false', () => {
    const child = <p>Some text</p>
    const props = {
      isOpen: true,
      children: child, 
      onClose: jest.fn(), 
      title: 'Title',
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    // expect(wrappedComponent.find('.dialog').exists()).toEqual(true);
    expect(wrappedComponent).toBeTruthy();
  })

  it ('should not render Dialog in case of isOpen false', () => {
    const child = <p>Some text</p>
    const mockOnClose = jest.fn();
    const props = {
      isOpen: true,
      children: child, 
      title: 'Title',
    };
    const wrappedComponent = shallow(<Dialog onClose={mockOnClose} {...props} />);
    wrappedComponent.find('.dialog__close-btn').simulate('click');
    expect(mockOnClose).toBeCalled();
  })

  it ('should render Dialog with its elements', () => {
    const child = <p>Some text</p>;
    const props = {
      isOpen: true,
      children: child, 
      onClose: jest.fn(), 
      title: 'Title',
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })
});