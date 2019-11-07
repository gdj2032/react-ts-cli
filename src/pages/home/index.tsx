import * as React from 'react';
import Test1 from './Test1';
import './index.scss';
import { aaa } from '@/action';
import { DatePicker } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div className="g-home">
        <div className="home">home11</div>
        <div>{aaa}</div>
        <Test1/>
        <DatePicker/>
      </div>
    )
  }
}

export default Home
