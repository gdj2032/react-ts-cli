import React, { Component } from 'react';
import { Table } from 'antd';

interface Props {
  data: any;
}

class RNPluginsTable extends Component<Props> {

  // defaultProps = {
  //   data: [{
  //     description: 'description',
  //     name: 'name',
  //     url: 'url',
  //     detail: 'detail',
  //   }]
  // }

  defaultrecord = {
    description: 'description',
    name: 'name',
    url: 'url',
  }

  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
      record: this.defaultrecord
    }
  }
  columns = [
    {
      title: '简述',
      dataIndex: 'description',
      key: 'description',
      width: 400,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'url',
      dataIndex: 'url',
      key: 'url',
      width: 200,
      render: (text, record) => <a href={record.url ? record.url : `https://www.npmjs.com/package/${record.name}`} target="_blank" true="true" rel="noopener noreferrer">GO</a>
    },
  ];


  render() {
    return (
      <Table columns={this.columns} dataSource={this.props.data} rowKey={'name'} />
    )
  }
}

export default RNPluginsTable
