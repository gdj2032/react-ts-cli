import React, { Component } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Input, Button } from 'antd'
import { userService } from '@/service';
import { updateUser } from '@/action/setting';
import store from '@/reduxes';

export class Login extends Component {

  userRefs: any;
  pwdRefs: any;

  onClick = async () => {
    const username = this.userRefs.state.value;
    const password = this.pwdRefs.state.value;
    console.log(username, password)
    const [err, data] = await userService.login({username, password})
    console.log(data)
    store.dispatch(updateUser({...data, isLogin: true}))
  }
  render() {
    return (
      <div>
        Login111
        <SvgIcon name="succeed" color="red" size={50} />
        <Input width={200} ref={c => this.userRefs = c} />
        <Input width={200} ref={c => this.pwdRefs = c} />
        <Button onClick={this.onClick}>确认</Button>
      </div>
    )
  }
}

export default Login
