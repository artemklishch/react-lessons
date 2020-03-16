import React from 'react';
import TasksList from '../TasksList';
import { shallow } from 'enzyme';

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

  it ('should request tasks list', () => {
    const wrappedComponent = shallow(<TasksList />);
    expect(mockGetTasksList).toBeCalled();
  })
});