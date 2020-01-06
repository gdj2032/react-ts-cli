import React, { Component } from 'react';
import {
    withRouter,
    RouteComponentProps as ReactRouterComponentProps,
    Redirect,
    Route
} from 'react-router-dom';

interface IRouteWrapProps extends ReactRouterComponentProps<any> {
    routeConfig: IRouteOption;
}

class RouteWrap extends Component<IRouteWrapProps> {
    render() {
        const { routeConfig } = this.props;
        const RealComponent = routeConfig.component;
        return RealComponent ? <RealComponent {...this.props} /> : null;
    }
}

const RouterComponent = withRouter(RouteWrap);

const routeList = (routeConfig: IRouteOption[]) => {
    return routeConfig.map((route: IRouteOption) => {
        if (route.redirect) {
            return <Redirect from={route.path} to={route.redirect} exact={route.exact} key={route.redirect} />;
        } else {
            const renderComponent = () => <RouterComponent routeConfig={route} />;
            return <Route path={route.path} exact={route.exact} render={renderComponent} key={route.path} />;
        }
    })
}

export default routeList;
