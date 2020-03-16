import React from 'react';
import Mailbox from '../Mailbox';
import { shallow } from 'enzyme';

describe('<Mailbox />', () => {
  it ('should get number of unread messages', () => {
    const props = {
      unreadMessages: [1,2,3,4,5,6,7,8,9,0],
    }
    const wrappedComponent = shallow(<Mailbox {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  })
});