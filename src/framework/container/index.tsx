import * as React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import './index.scss';
import routeList from '../routes/routeList';

interface Props {
  routeConfig?: any;
}

class ContainerPage extends React.Component<Props> {

	render() {
		const childRouteConfig = this.props.routeConfig.children || [];
		return (
			<div>
        <h1>ContainerPage1</h1>
        <Switch>
          {routeList(childRouteConfig)}
        </Switch>
      </div>
		);
	}
}

export default withRouter(ContainerPage as any);
