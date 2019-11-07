import * as React from 'react';
import Test1 from './Test1';
import './index.scss';
import { DatePicker } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div className="g-home">
        <div className="home">home11</div>
        <Test1/>
        <DatePicker/>
      </div>
    )
  }
}

export default Home
