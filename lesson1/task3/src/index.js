import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
  <div class="greeting">
    <div class="greeting__title">Hello, World!</div>  
    <div class="greeting__text">I\'m learning React</div>
  </div>
);

ReactDOM.render(element, rootElement);