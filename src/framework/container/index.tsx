import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

class ContainerPage extends React.PureComponent {
	render() {
		return (
			<div>ContainerPage</div>
		);
	}
}

export default withRouter(ContainerPage as any);
