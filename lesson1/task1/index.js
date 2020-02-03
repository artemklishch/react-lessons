//<div class="greenetng">Hello, React</div>



//const rootElement = document.querySelector('#root');
// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add('greeting');

// const titleElem = document.createElement('div');
// titleElem.textContent = "Hello, world!";
// titleElem.classList.add('greeting__title');

// const greetingTextElem = document.createElement('div');
// greetingTextElem.textContent = 'I\'m learning React';
// greetingTextElem.classList.add('greeting__text');

// wrapperElem.append(titleElem, greetingTextElem);
// rootElement.append(wrapperElem);




const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);