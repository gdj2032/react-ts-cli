import React, { Component } from 'react'
import {Modal, TForm, message} from '@tmind/yuna'
import { IFormBaseItem } from '@tmind/yuna/lib/Form'
import { userService } from '@/service';
import { IUpdatePwd } from '@/service/user';

export class UpdatePwdM extends Component {

  tFormRefs: any;
  newPassword = '';

  state = {
    visible: false,
    newPsd: ''
  }

  show() {
    this.setState({ visible: true })
  }

  newPsdValidator = (rule, value, cb) => {
    this.setState({ newPsd: value })
    cb();
  }

  confirmPsdValidator = (rule, value, cb) => {
    if (this.state.newPsd !== value) {
      rule.message = '新密码不一致，请重新输入';
      cb(rule.message)
      return;
    }
    cb();
  }

  formItems: IFormBaseItem[] = [
    {
      id: 'oldPassword',
      label: '旧密码',
      type: 'password',
      pattern: [/^.{6,20}$/, '密码长度为6-20'],
    },
    {
      id: 'newPassword',
      label: '新密码',
      type: 'password',
      validator: this.newPsdValidator,
      pattern: [/^.{6,20}$/, '密码长度为6-20'],
    },
    {
      id: 'reNewPassword',
      label: '重复新密码',
      type: 'password',
      validator: this.confirmPsdValidator,
      pattern: [/^.{6,20}$/, '密码长度为6-20'],
    },
  ]

  onOk = () => {
    this.tFormRefs.validateFields( async (err: any, value: IUpdatePwd) => {
			if (!err) {
				const [err, data] = await userService.updatePwd(value)
        if(data && data.code && data.code === 200 ) {
          message.success(data.message)
          this.close();
        } else {
					message.error(err.message)
				}
			}
		});
  }

  close = () => {
    this.setState({ visible: false })
  }
  render() {
    const { visible } = this.state;
    return (
      <Modal
        title={'修改密码'}
        visible={visible}
        onOk={this.onOk}
        onCancel={this.close}
        okText={'确认'}
        cancelText={'取消'}
        destroyOnClose
      >
        <TForm
          formItems={this.formItems}
          ref={c => this.tFormRefs = c}
        />
      </Modal>
    )
  }
}

export default UpdatePwdM
