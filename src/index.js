import React from 'react';
import ReactDOM from 'react-dom';
import Root from './commentwork/routes';
import './style/global.scss';
import { APPNAME, LOGO } from './constants';

import './images';

const App = () => {
  return <Root/>;
};

document.title = APPNAME;

const link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = LOGO;
link.type = 'image/png';
document.getElementsByTagName('HEAD').item(0).appendChild(link);

ReactDOM.render(<App />, document.getElementById('root'));
