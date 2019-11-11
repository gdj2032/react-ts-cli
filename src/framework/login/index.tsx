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

  onClick = async () => {
    const username = this.userRefs.state.value;
    const password = this.pwdRefs.state.value;
    console.log(username, password)
    const [err, data] = await userService.login({username, password})
    console.log(data, this.props)
    store.dispatch(updateUser({...data, isLogin: true}))
    this.props.history.push(PathConfig.home)
  }
  render() {
    return (
      <div>
        Login111
        <Input width={200} ref={c => this.userRefs = c} />
        <Input width={200} ref={c => this.pwdRefs = c} />
        <Button onClick={this.onClick}>确认</Button>
      </div>
    )
  }
}

export default Login
