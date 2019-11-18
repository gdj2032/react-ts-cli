import React, { Component } from 'react';
import HomeMenuConfig, { IHomeMenu } from '@/constants/homeMenu';
import './index.scss';

interface Props{
  history?: any;
}
export class HomeMenu extends Component<Props> {

  menuItem = (item: IHomeMenu) => {
    return(
      <a className="menu-item" key={item.title} onClick={() => this.onMenu(item)}>{item.title}</a>
    )
  }

  onMenu = (item: IHomeMenu) => {
    this.props.history.push(item.path)
  }
  render() {
    return (
      <div className="h-top-menu">
        {
          HomeMenuConfig() && HomeMenuConfig().map((item: IHomeMenu) => this.menuItem(item))
        }
      </div>
    )
  }
}

export default HomeMenu
