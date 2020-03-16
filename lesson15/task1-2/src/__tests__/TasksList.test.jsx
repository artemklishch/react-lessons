import React from 'react';
import TasksList from '../TasksList';
import { shallow } from 'enzyme';
import { fetchTasksList, onDeleteTask } from '../tasksGateway';

jest.mock('../tasksGateway', () => {
  return {
    fetchTasksList: jest.fn(() => Promise.resolve([])),
    createTask: jest.fn(),
    onChangeTask: jest.fn(),
    onDeleteTask: jest.fn(() => Promise.resolve()),
  }
});

describe('<TasksList />', () => {
  // it ('shpuld display tasks list sorted by "done" status', () => {
  //   const props = {
  //     handleTaskOnChange: jest.fn(),
  //     handleTaskDelete: jest.fn(),
  //     tasks: [
  //       {text: 'Text 1', id: 'some-id-1', done: true},
  //       {text: 'Text 2', id: 'some-id-2', done: false},
  //       {text: 'Text 3', id: 'some-id-3', done: true},
  //     ]
  //   };
  //   const wrappedComponent = shallow(<TasksList {...props} />);
  //   expect(wrappedComponent).toMatchSnapshot();
  // })

  it('should request tasks list', () => {
    shallow(<TasksList />);
    expect(fetchTasksList).toBeCalled();
  })

  it('should handle task delete', () => {
    const wrappedComponent = shallow(<TasksList />);
    const deleteHandler = wrappedComponent.find('Task').prop('handleTaskDelete');
    deleteHandler('some-id-87');
    expect(onDeleteTask).toBeCalledWith('some-id-87');
  })
});