import React from 'react';
import User from './User';

const Filter = ({certainUsers}) => certainUsers
  .map(user => <User key={user.id} {...user} />);

export default Filter;