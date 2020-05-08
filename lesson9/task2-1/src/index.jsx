import React from 'react';
import ReactDOM  from 'react-dom';
import './index.scss';
import UserForm from './UserForm';

const funcForSentData = data => {
  console.log(data);
};

const rootElement = document.querySelector('#root');

ReactDOM.render(<UserForm onSubmit={funcForSentData} />, rootElement);