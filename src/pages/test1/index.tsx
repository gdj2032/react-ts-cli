export const RoutePath = '/test1';
import React, { Component } from 'react'
import './index.scss';
import { GToolTip } from '@/components/GToolTip';

export class Test1 extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="g-test1">
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

export default Test1
