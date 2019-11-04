import * as React from 'react';
import Test2 from './test2'

export class Test1 extends React.Component {
  render() {
    return (
      <div>
        test1
        <Test2/>
      </div>
    )
  }
}

export default Test1
