import * as React from 'react';
import './index.scss';
import { HomeMenu } from '@/components/HomeMenu';

interface Props {
  history?: any;
}

class Home extends React.Component<Props> {

  render() {
    return (
      <div className="g-home">
        <HomeMenu {...this.props} />
        <div className="home">Home</div>
      </div>
    )
  }
}

export default Home
