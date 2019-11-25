import React, { Component } from 'react'

import './index.scss';
import { LOGO, APPNAME, userInit } from '@/constants';
import store from '@/reduxes';
import { updateUser } from '@/action/setting';
import { PathConfig } from '../routes';

interface Props {
  history: any;
}

export class Header extends Component<Props> {

  onLogout = () => {
    store.dispatch(updateUser(userInit))
    this.props.history.push(PathConfig.login)
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
