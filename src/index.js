import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomePage } from './pages'

const App = () => {
  return <HomePage/>;
};

ReactDOM.render(<App />, document.getElementById('root'));