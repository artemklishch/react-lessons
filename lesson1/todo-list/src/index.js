import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
  <div className="title">Todo List</div>
);

ReactDOM.render(element, rootElement);