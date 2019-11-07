import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '@/framework/login';
import Container from '@/framework/container';

class RootRouter extends React.Component<IUserInfo> {
  render() {
    const isLogin = this.props.isLogin;
    console.log(isLogin)
    if (isLogin) {
      return (
        <HashRouter>
          <Switch>
            <Route path="/app" component={Container} />
            <Redirect to="/app/home" />
          </Switch>
        </HashRouter>
      );
    }
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
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