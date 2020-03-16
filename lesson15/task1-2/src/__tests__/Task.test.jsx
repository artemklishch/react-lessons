import React from 'react';
import Task from '../Task';
import { shallow } from 'enzyme';

describe('<Task />', () => {
  it ('should display done task', () => {
    const props = {
      text: 'Task 1',
      done: true,
      id: 'some-id-1',
      onChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })

  it ('should display done task', () => {
    const props = {
      text: 'Task 1',
      done: false,
      id: 'some-id-1',
      onChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })

  it ('should update task on checkbox checked', () => {
    const props = {
      text: 'Task 1',
      done: false,
      id: 'some-id-1',
      onChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find('.list-item__checkbox').simulate('change');
    expect(props.onChange).toBeCalledWith('some-id-1');
  })

  it ('should delete task', () => {
    const props = {
      text: 'Task 1',
      done: false,
      id: 'some-id-1',
      onChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find('.list-item__delete-btn').simulate('click');

    expect(props.handleTaskDelete).toBeCalledWith('some-id-1');
  })
  
});