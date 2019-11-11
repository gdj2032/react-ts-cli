import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import Home from '@/pages/home';

class ContainerPage extends React.PureComponent {
	render() {
		return (
			<div>
        <h1>ContainerPage</h1>
        <Home/>
      </div>
		);
	}
}

export default withRouter(ContainerPage as any);
