import * as React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import './index.scss';
import routeList from '../routes/routeList';
import Header from '../header';
import LeftMenu from '../leftMenu';

interface Props {
  routeConfig?: any;
}

class ContainerPage extends React.Component<Props> {

	render() {
		const childRouteConfig = this.props.routeConfig.children || [];
		return (
			<div className="g-container">
        <Header/>
        <div className="p-content">
          <LeftMenu/>
          <div className="p-route-page">
            <Switch>
              {routeList(childRouteConfig)}
            </Switch>
          </div>
        </div>
      </div>
		);
	}
}

export default withRouter(ContainerPage as any);
