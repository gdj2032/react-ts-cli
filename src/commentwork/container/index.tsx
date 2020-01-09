import * as React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import './index.scss';
import routeList from '../routes/routeList';
import Header from '../header';
import { store } from '@/reduxes/store';
import { updateUser } from '@/action/setting';
import { userService } from '@/service';

interface Props {
  routeConfig?: any;
  user?: any;
}

class ContainerPage extends React.Component<Props> {

  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo = async () => {
    const [err, data] = await userService.getUserInfo();
    if (data && data.code && data.code === 200) {
      store.dispatch(updateUser({ id: data.id, username: data.username, isLogin: true }))
    }
  }

  render() {
    const childRouteConfig = this.props.routeConfig.children || [];
    return (
      <div className="container">
        <Header {...this.props} />
        <Switch>
          {routeList(childRouteConfig)}
        </Switch>
      </div>
    );
  }
}

export default withRouter(ContainerPage as any);
