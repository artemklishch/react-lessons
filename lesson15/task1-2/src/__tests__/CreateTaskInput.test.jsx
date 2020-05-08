import React from 'react';
import CreateTaskInput from '../CreateTaskInput';
import { shallow } from 'enzyme';

describe('<CreateTaskInput />', () => {
  it('should create Task on submit', () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(
      <CreateTaskInput onCreate={mockOnCreate} />
      );
    const fakeEvent = { target: { value: 'Visit a doctor' } };
    wrappedComponent
      .find('.create-task__input')
      .simulate('change', fakeEvent);
    wrappedComponent.find('.create-task-btn').simulate('click');
    expect(mockOnCreate).toBeCalledWith('Visit a doctor')
  })

  it('should clear input on submit', () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(
      <CreateTaskInput onCreate={mockOnCreate} />
      );
    const fakeEvent = { target: { value: 'Visit a doctor' } };
    wrappedComponent
      .find('.create-task__input')
      .simulate('change', fakeEvent);
    wrappedComponent.find('.create-task-btn').simulate('click');
    expect(
      wrappedComponent.find('.create-task__input').prop('value'))
      .toEqual('')
  })
});

