import React from 'react';
import ReactDOM from 'react-dom';
import Root from './framework/routes';
import './style/variable.scss';
import './style/global.scss';
import { APPNAME } from './constants';

import './images';

const App = () => {
  return <Root/>;
};

document.title = APPNAME;

ReactDOM.render(<App />, document.getElementById('root'));
