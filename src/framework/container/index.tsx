import * as React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import './index.scss';
import routeList from '../routes/routeList';
import Header from '../header';
import LeftMenu from '../leftMenu';

interface Props {
  routeConfig?: any;
  history?: any;
}

class ContainerPage extends React.Component<Props> {

	render() {
		const childRouteConfig = this.props.routeConfig.children || [];
		return (
			<div className="g-container">
        <div className="p-header">
          <Header history={this.props.history}/>
        </div>
        <div className="p-content">
          <div className="p-left-menu">
            <LeftMenu routes={childRouteConfig} history={this.props.history}/>
          </div>
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
