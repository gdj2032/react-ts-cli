export const RoutePath = '/test2';
import React, { Component } from 'react'

export class Test2 extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        Test22222
      </div>
    )
  }
}

export default Test2
