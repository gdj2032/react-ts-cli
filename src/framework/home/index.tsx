import * as React from 'react';
import './index.scss';
import { HomeMenu } from '@/components/HomeMenu';
import { Table } from 'antd';
import { shopService } from '@/service';
import moment from 'moment';
import { connect } from '@/utils';
import { IListInfo } from '@/service/shop';

interface Props {
  history?: any;
  user?: any;
}

@connect
class Home extends React.Component<Props> {

  state = {
    data: null,
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user.isLogin) {
      this.getShopList({ id: this.props.user.id, offset: 0, limit: 10 })
    }
  }

  getShopList = async (opt: IListInfo) => {
    const [err, data] = await shopService.ShopList(opt);
    console.log("TCL: Home -> getShopList -> data", data)
    if (!err) {
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
    {
      key: 'func',
      title: '操作',
      dataIndex: 'func',
      render: (text, record) => {
        return (
          <div className="t-func">
            <a onClick={() => this.onDelete(record)}>删除</a>
            <a>编辑</a>
          </div>
        )
      }
    },
  ]

  onDelete = (record) => { }

  onPageChange = (page, pageSize) => {
    console.log("TCL: Home -> onPageChange -> page, pageSize", page, pageSize)
    const opt = {
      id: this.props.user.id,
      offset: (page - 1) * pageSize,
      limit: pageSize,
    }
    this.getShopList(opt)
  }

  render() {
    const { data } = this.state;
    return (
      <div className="g-home">
        <HomeMenu {...this.props} />
        <div className="home">Home</div>
        <div className="h-table">
          <Table
            rowKey={'id'}
            columns={this.columns}
            dataSource={data && data.data}
            pagination={
              {
                total: (data && data.total) || 0,
                onChange: this.onPageChange
              }
            }
          />
        </div>
      </div>
    )
  }
}

export default Home
