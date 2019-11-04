import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './pages';
import './style/variable.scss';

const App = () => {
  return <HomePage/>;
};

ReactDOM.render(<App />, document.getElementById('root'));