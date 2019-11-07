import React from 'react';
import ReactDOM from 'react-dom';
import Root from './framework/routes';
import './style/variable.scss';

const App = () => {
  return <Root/>;
};

ReactDOM.render(<Root />, document.getElementById('root'));