import React, { Component } from 'react';
import { LOGO, APPNAME, userInit } from '@/constants';
import store from '@/reduxes';
import { updateUser } from '@/action/setting';
import { PathConfig } from '../routes';
import { userService } from '@/service';
import { message } from 'antd';

import './index.scss';

interface Props {
  history: any;
}

export class Header extends Component<Props> {

  onLogout = async () => {
    const [err, data] = await userService.logout(store.getState().user.id)
    if(!err) {
      store.dispatch(updateUser(userInit))
      this.props.history.push(PathConfig.login)
    } else {
      message.error(err.message)
    }
  }

  render() {
    return (
      <div className="g-header">
        <div className="h-logo">
          <img src={LOGO} className="h-img" />
          <span className="h-title">{APPNAME}</span>
        </div>
        <div className="h-userInfo">
          <span className="h-username">{store.getState().user.username}</span>
          <span className="h-logout"><a onClick={this.onLogout}>登出</a></span>
        </div>
      </div>
    )
  }
}

export default Header
