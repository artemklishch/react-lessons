import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
    {
      age:21,
      name:'Bob',
      id: 'id-0',
    },
    {
      age:17,
      name:'Tom',
      id: 'id-1',
    },
    {
      age:18,
      name:'Tom',
      id: 'id-2',
    },
    {
      age:45,
      name:'Sam',
      id: 'id-3',
    },
    {
        age:40,
        name:'Samuel',
        id: 'id-4',
    },
    {
        age:25,
        name:'Dan',
        id: 'id-5',
      },
      {
        age:50,
        name:'Daniel',
        id: 'id-6',
      },
  ];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
