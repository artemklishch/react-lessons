import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0
    ? '#fff'
    : '#000';
  const textColor = seconds % 2 === 0
    ? '#000'
    : '#fff';
  const styles = {
    backgroundColor,
    color: textColor
  };
  const rootElement = document.querySelector('#root');
  const element = (
    <div
      className="seconds"
      style={styles}
    >
      Now is {seconds}
    </div>
  );
  ReactDOM.render(element, rootElement);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);