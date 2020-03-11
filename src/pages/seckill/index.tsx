export const RoutePath = '/seckill';
import React, { Component } from 'react'
import './index.scss'
import { GToolTip } from '@/components/GToolTip';

interface IProps {
}

interface IState {
}

class Seckill extends Component<IProps, IState> {

  state: IState = {}

  render() {
    return (
      <div className="g-seckill">
        <h1>秒杀</h1>
        <GToolTip
          tip={() =>
            <div>
              <div>1234567890987654321aaa1234567890987654321</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
            </div>
          }
          type="right"
          showArrow
        >
          <div style={{ height: '20px', lineHeight: '20px', }}>rightrightrightright</div>
        </GToolTip>
        <div>1111</div>

        <GToolTip
          tip={() =>
            <div>
              <div>1234567890987654321aaa1234567890987654321</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
            </div>
          }
          type="right"
          showArrow
        >
          <div style={{ height: '20px', lineHeight: '20px', }}>rightrightrightright</div>
        </GToolTip>
        <div>2222</div>

        <GToolTip
          tip={'asasdgajhsd'}
          type="left"
          showArrow
        >
          <div style={{ height: '20px', lineHeight: '20px', }}>leftleftleftleftleft</div>
        </GToolTip>
      </div>
    )
  }
}

export default Seckill;
