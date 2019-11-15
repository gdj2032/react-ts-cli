import React, { Component } from 'react';
import './index.scss';
import store from '@/reduxes';

class Header extends Component {
  render() {
    const user = store.getState().user
    return (
      <div className="g-header">
        <div className="h-top">
          {
            user.isLogin ?
            <span>
              <span className="h-text h-top-username">{user.username}</span>
              <a className="h-text h-top-logout">登出</a>
            </span>
            :
            <span>
              <a className="h-text h-top-login">你好 请登录</a>
              <a className="h-text h-top-register">免费注册</a>
            </span>
          }
        </div>
        Header
      </div>
    )
  }
}

export default Header;
