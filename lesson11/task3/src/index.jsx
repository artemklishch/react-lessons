import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Expand from './Expand';

const rootElement = document.querySelector('#root');

const title = "Grate title";
const content = "Hooks are a new addition in React 16.8. They let you use state and other \React features without writing a className.";

ReactDOM.render(
  <Expand
    title={title}
    content={content}  
  />,
  rootElement
  );