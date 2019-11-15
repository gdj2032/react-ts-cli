import * as React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import './index.scss';
import routeList from '../routes/routeList';
import Header from '../header';

interface Props {
  routeConfig?: any;
}

class ContainerPage extends React.Component<Props> {

	render() {
		const childRouteConfig = this.props.routeConfig.children || [];
		return (
			<div>
        <Header {...this.props} />
        <Switch>
          {routeList(childRouteConfig)}
        </Switch>
      </div>
		);
	}
}

export default withRouter(ContainerPage as any);
