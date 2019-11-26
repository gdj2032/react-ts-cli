export const RoutePath = '/reactnative';
import React, { Component } from 'react';
import { RNPluginData } from '@/utils';

import { Input } from 'antd';
import RNPluginsTable from './component/RNPluginsTable';

const { Search } = Input;

export default class ReactNative extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.setState({ data: RNPluginData });
  }

  onChange = (v) => {
    const value = v.target.value;
    if(!value) {
      this.setState({ data: RNPluginData});
      return;
    }
    const newData = RNPluginData.filter(ele => JSON.stringify(ele).indexOf(value) > 0);
    this.setState({ data: newData});
  }

  render() {
    const { data } = this.state;
    return (
      <div className="g-page">
        <h1>RNPlugin</h1>
        <div className="rn_search">
          <Search
            placeholder="请输入内容"
            style={{ width: 400 }}
            onChange={this.onChange}
          />
        </div>
        <RNPluginsTable data={data} />
      </div>
    )
  }
}
