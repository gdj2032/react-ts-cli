import * as React from 'react';
import './index.scss';
import { HomeMenu } from '@/components/HomeMenu';
import { Table } from 'antd';
import { shopService } from '@/service';
import store from '@/reduxes';
import moment from 'moment';
import { connect } from '@/utils';

interface Props {
  history?: any;
  user?: any;
}

@connect
class Home extends React.Component<Props, any> {

  state = {
    data: null,
  }

  componentDidMount() {
    console.log(this.props);
    if(this.props.user.isLogin) {
      this.getShopList()
    }
  }

  getShopList = async () => {
    const [err, data] = await shopService.ShopList({id: store.getState().user.id, offset: 0, limit: 10});
    console.log("TCL: Home -> getShopList -> data", data)
    if(!err) {
      this.setState({ data: data })
    }
  }

  columns = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'name',
      dataIndex: 'name',
    },
    {
      key: 'num',
      title: 'num',
      dataIndex: 'num',
    },
    {
      key: 'description',
      title: 'description',
      dataIndex: 'description',
    },
    {
      key: 'createTime',
      title: 'createTime',
      dataIndex: 'createTime',
      render: (text) => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>
    },
  ]

  render() {
    const { data } = this.state;
    return (
      <div className="g-home">
        <HomeMenu {...this.props} />
        <div className="home">Home</div>
        <Table
          columns={this.columns}
          dataSource={data && data.data}
          pagination={
            {
              total: (data && data.total) || 0
            }
          }
        />
      </div>
    )
  }
}

export default Home
