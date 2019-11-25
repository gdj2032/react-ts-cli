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

export class Register extends Component<Props> {

  registerform: any;

  onInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
		if (e.which === 13) {
			this.handleSubmit();
			e.stopPropagation();
		}
	}
	handleSubmit = () => {
		this.registerform.validateFields( async (err: any, value: any) => {
			if (!err) {
				console.log(value)
				const [err, data] = await userService.register(value)
        console.log("TCL: Register -> handleSubmit -> err, data", err, data)
        if(!err) {
					message.success('注册成功，请登录')
          this.props.history.push(PathConfig.login)
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
			},
			// {
			// 	id: 'rePassword',
			// 	label: '重复密码',
			// 	placeholder: '请输入密码',
			// 	type: 'password',
			// 	required: '请输入密码',
			// 	props: {
			// 		onKeyDown: this.onInputKeyPress
			// 	}
			// },
		];

    return (
      <div className="g-register">
        <div className="register-content">
          <div className="register-title"><h2>注册</h2></div>
          <div className="register-form">
            <TForm
              hideRequiredMark
              formItems={formItems}
              ref={c => this.registerform = c}
              itemLayout={{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}
            />
          </div>
          <div className="register-btn">
            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
