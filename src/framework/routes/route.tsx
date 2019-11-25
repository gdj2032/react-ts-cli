import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import routeList from './routeList';
import { pageRoute, loginRoute } from './routes';

class RootRouter extends React.Component<IUserInfo> {
  render() {
    const isLogin = this.props.isLogin;
    return (
      <HashRouter>
        <Switch>
          {routeList(isLogin ? pageRoute : loginRoute)}
        </Switch>
      </HashRouter>
    );
  }
}
function mapStateToProps(state: IAppState) {
  return { ...state.user };
}

const WrapRouter = connect(mapStateToProps)(RootRouter);

export default WrapRouter;
