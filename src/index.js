import React from 'react';
import ReactDOM from 'react-dom';
import Root from './framework/routes';
import './style/variable.scss';

import './images';

const App = () => {
  return <Root/>;
};

ReactDOM.render(<App />, document.getElementById('root'));
