export const RoutePath = '/test1';
import React, { Component } from 'react'

export class Test1 extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        Test1222
      </div>
    )
  }
}

export default Test1
