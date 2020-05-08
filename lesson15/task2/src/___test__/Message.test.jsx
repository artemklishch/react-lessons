import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('<Message />', () => {
  it ('should render component with text', () => {
    const props = {
      text: 'Hello world!'
    }
    const wrappedComponent = shallow(<Message {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })

  it ('shouldn`t render component with text', () => {
    const props = {
      text: ''
    }
    const wrappedComponent = shallow(<Message {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })
});