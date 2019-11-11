import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { userService } from '@/service';
import { updateUser } from '@/action/setting';
import store from '@/reduxes';
import { PathConfig } from '../routes';

import './index.scss';

interface Props{
  history?: any;
}

export class Login extends Component<Props> {

  userRefs: any;
  pwdRefs: any;

  handleSubmit = async () => {
    const username = this.userRefs.state.value;
    const password = this.pwdRefs.state.value;
    const [err, data] = await userService.login({username, password})
    if(!err) {
      store.dispatch(updateUser({...data, isLogin: true}))
      this.props.history.push(PathConfig.home)
    }
  }
  render() {
    return (
      <div className="g-login">
        <div className="login-form">
          <Input ref={c => this.userRefs = c} />
          <Input ref={c => this.pwdRefs = c} />
        </div>
        <div className="login-btn">
          <Button type="primary" onClick={this.handleSubmit}>登录</Button>
        </div>
      </div>
    )
  }
}

export default Login
