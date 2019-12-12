export const RoutePath = '/home';
import * as React from 'react';
import './index.scss';
import { PathConfig } from '@/framework/routes';
import SvgIcon from '@/components/SvgIcon';
import { connect } from '@/utils';

interface Props {
  history?: any;
  user?: any;
}

@connect
class Home extends React.Component<Props> {
  onGoto = () => {
    this.props.history.push(PathConfig.homeDetail)
  }
  render() {
    console.log(this.props)
    return (
      <div className="g-home">
        <div className="home">Home</div>
        <SvgIcon name="succeed" color="red" size={50} />
        <div onClick={this.onGoto}>goto</div>
        <div>connect: {this.props.user.username}</div>
      </div>
    )
  }
}

export default Home
