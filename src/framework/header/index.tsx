import React, { Component } from 'react';
import './index.scss';
import store from '@/reduxes';
import { LOGO, userInit } from '@/constants';
import Search from 'antd/lib/input/Search';
import { updateUser } from '@/action/setting';
import { PathConfig } from '../routes';

interface Props {
  history?: any;
}

class Header extends Component<Props> {

  onLogout = () => {
    store.dispatch(updateUser(userInit))
  }

  onLogin = () => {
    this.props.history.push(PathConfig.login)
  }

  onRegister = () => {}

  onHome = () => {
    this.props.history.push(PathConfig.home)
  }

  render() {
    const user = store.getState().user
    return (
      <div className="g-header">
        <div className="h-top">
          {
            user.isLogin ?
            <span>
              <span className="h-text h-top-username">{user.username}</span>
              <a className="h-text h-top-logout" onClick={this.onLogout}>登出</a>
            </span>
            :
            <span>
              <a className="h-text h-top-login" onClick={this.onLogin}>登录</a>
              <a className="h-text h-top-register" onClick={this.onRegister}>注册</a>
            </span>
          }
        </div>
        <div className="h-search-icon">
          <a onClick={this.onHome}>
            <img className="h-logo" src={LOGO} />
          </a>
          <Search placeholder="请输入搜索内容" className="h-search" onSearch={value => console.log(value)} enterButton size={'large'} />
        </div>
      </div>
    )
  }
}

export default Header;
