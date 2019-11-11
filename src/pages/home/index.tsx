export const RoutePath = '/home';
import * as React from 'react';
import './index.scss';
import { DatePicker } from 'antd';
import { PathConfig } from '@/framework/routes';

interface Props {
  history?: any;
}

class Home extends React.Component<Props> {
  onGoto = () => {
    console.log(this.props)
    this.props.history.push(PathConfig.test1)
  }
  render() {
    return (
      <div className="g-home">
        <div className="home">Home</div>
        <div onClick={this.onGoto}>goto</div>
        <DatePicker/>
      </div>
    )
  }
}

export default Home
