export const RoutePath = '/home';
import * as React from 'react';
import './index.scss';
import { DatePicker } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div className="g-home">
        <div className="home">home11</div>
        <DatePicker/>
        <div>111</div>
      </div>
    )
  }
}

export default Home
