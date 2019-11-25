import React, { Component } from 'react'
import { TForm, Button, message } from '@tmind/yuna'
import { userService } from '@/service';
import { updateUser } from '@/action/setting';
import store from '@/reduxes';
import { PathConfig } from '../routes';

import './index.scss';
import { IFormItem } from '@tmind/yuna/lib/Form';

interface Props{
  history?: any;
}

export class Login extends Component<Props> {

  loginform: any;

  onInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
		if (e.which === 13) {
			this.handleSubmit();
			e.stopPropagation();
		}
	}
	handleSubmit = () => {
		this.loginform.validateFields( async (err: any, value: ILoginParams) => {
			if (!err) {
				console.log(value)
				const [err, data] = await userService.login(value)
        if(!err) {
          store.dispatch(updateUser({...data, isLogin: true}))
          this.props.history.push(PathConfig.home)
        } else {
					message.error(err.message)
				}
			}
		});
	}

  render() {
    const formItems: IFormItem[] = [
			{
				id: 'username',
				initialValue: 'admin',
				label: '账户',
				placeholder: '请输入账户名',
				type: 'input',
				required: '请输入账户名',
				props: {
					onKeyDown: this.onInputKeyPress
				}
			},
			{
				id: 'password',
				label: '密码',
				placeholder: '请输入密码',
				type: 'password',
				required: '请输入密码',
				props: {
					onKeyDown: this.onInputKeyPress
				}
			}
		];

    return (
      <div className="g-login">
        <div className="login-content">
          <div className="login-title"><h2>登录</h2></div>
          <div className="login-form">
            <TForm
              hideRequiredMark
              formItems={formItems}
              ref={c => this.loginform = c}
              itemLayout={{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}
            />
          </div>
          <div className="login-btn">
            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
