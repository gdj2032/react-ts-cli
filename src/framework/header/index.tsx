import React, { Component } from 'react';
import './index.scss';
import store from '@/reduxes';
import { LOGO, userInit } from '@/constants';
import Search from 'antd/lib/input/Search';
import { updateUser } from '@/action/setting';
import { PathConfig } from '../routes';
import { userService } from '@/service';
import { message } from 'antd';
import UpdatePwdM from './UpdatePwdM';

interface Props {
  history?: any;
}

class Header extends Component<Props> {

  mRefs: any;

  onLogout = async () => {
    const [err, data] = await userService.logout(store.getState().user.id)
    console.log("TCL: Login -> handleSubmit -> err, data", err, data)
    if(data && data.code && data.code === 200 ) {
      store.dispatch(updateUser(userInit))
      message.success('登出成功');
      window.history.go()
    } else {
      message.error(err.message)
    }
  }

  onLogin = () => {
    this.props.history.push(PathConfig.login)
  }

  onRegister = () => {
    this.props.history.push(PathConfig.register)
  }

  onHome = () => {
    this.props.history.push(PathConfig.home)
  }

  onUpdate = () => {
    this.mRefs.show();
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
              <a className="h-text h-top-logout" onClick={this.onUpdate}>修改密码</a>
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
        <UpdatePwdM ref={c => this.mRefs = c} />
      </div>
    )
  }
}

export default Header;
