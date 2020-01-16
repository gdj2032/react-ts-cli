export const RoutePath = '/home/tooltip';
import React, { Component } from 'react'
import './index.scss'
import GToolTip from '@/components/GToolTip';

interface IProps {
}

interface IState {
}

class ToolTip extends Component<IProps, IState> {

  state: IState = {}

  render() {
    return (
      <div className="">
        <h1>ToolTip</h1>
        <GToolTip
          tip={() => <div>测试文字是his尖峰时刻过节费时间发货时</div>}
          showArrow
          type="right"
          defaultVisible
        >
          要显示tooltip鼠标就点过来
        </GToolTip>
        <br/>
        <GToolTip
          tip={() => <div>测试文字是his尖峰时刻过节费时间发货时</div>}
          showArrow
          type="left"
        >
          要显示tooltip鼠标就点过来
        </GToolTip>
      </div>
    )
  }
}

export default ToolTip;
