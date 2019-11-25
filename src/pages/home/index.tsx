export const RoutePath = '/home';
import * as React from 'react';
import './index.scss';
import { PathConfig } from '@/framework/routes';
import SvgIcon from '@/components/SvgIcon';

interface Props {
  history?: any;
}

class Home extends React.Component<Props> {
  onGoto = () => {
    console.log(this.props)
    this.props.history.push(PathConfig.homeDetail)
  }
  render() {
    return (
      <div className="g-home">
        <div className="home">Home</div>
        <SvgIcon name="succeed" color="red" size={50} />
        <div onClick={this.onGoto}>goto</div>
      </div>
    )
  }
}

export default Home
