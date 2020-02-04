import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting 
    firstName="John"
    lastName="Doe"
    birthDate="2003-01-10" 
  />,
  rootElement
);