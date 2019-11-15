import * as React from 'react';
import './index.scss';
import { DatePicker } from 'antd';
import { PathConfig } from '@/framework/routes';
import store from '@/reduxes';
import { updateUser } from '@/action/setting';
import SvgIcon from '@/components/SvgIcon';
import { userInit } from '@/constants';

interface Props {
  history?: any;
}

class Home extends React.Component<Props> {
  onGoto = () => {
    console.log(this.props)
    this.props.history.push(PathConfig.test1)
  }
  onLogout = () => {
    store.dispatch(updateUser(userInit))
    this.props.history.push(PathConfig.login)
  }
  render() {
    return (
      <div className="g-home">
        <div className="home">Home</div>
        <SvgIcon name="succeed" color="red" size={50} />
        <div onClick={this.onGoto}>goto</div>
        <DatePicker/>
        <div onClick={this.onLogout}>logout</div>
      </div>
    )
  }
}

export default Home
