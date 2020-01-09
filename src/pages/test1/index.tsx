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
        <div>11111111</div>
        <GToolTip
          tip={
            <div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
              <div>测试tooltip--------------------</div>
            </div>
          }
          type="right"
        >
          <div>ggggggg</div>
        </GToolTip>
      </div>
    )
  }
}

export default Test1
