import React from 'react';
import { useParams } from 'react-router-dom';

onGetData = () => {


};

const User = () => {
  const baseUrl =  'https://api.github.com.users';
  const { userId } = useParams();

  console.log(userId);
  return (
    <div className="user">
      <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">GitHub</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};
export default User;