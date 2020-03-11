export const RoutePath = '/goods/:id';
import React, { Component } from 'react'
import './index.scss'

interface IProps {
}

interface IState {
}

class Goods extends Component<IProps, IState> {

  state: IState = {}

  render() {
    return (
      <div>
        <h1>商品详情</h1>
      </div>
    )
  }
}

export default Goods;
