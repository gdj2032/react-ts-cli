export const RoutePath = '/coupon';
import React, { Component } from 'react'
import './index.scss'

interface IProps {
}

interface IState {
}

class Coupon extends Component<IProps, IState> {

  state: IState = {}

  render() {
    return (
      <div>优惠券</div>
    )
  }
}

export default Coupon;
