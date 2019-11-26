import React, { Component } from 'react';
import { Menu, TIcon } from '@tmind/yuna';
import './index.scss';
import SvgIcon from '@/components/SvgIcon';
import menuConfig from '@/constants/menuConfig';

interface Props {
  routes: IRouteOption[];
  history: any;
}

export class LeftMenu extends Component<Props> {

  state = {
    selectedKey: this.props.history.location.pathname
  }

  generateMenu = (config: IRouteOption[] = []) => {
    return config.length && config.map(itemConfig => {
      if (itemConfig.children && itemConfig.children.length) {
        return this.generateSubMenu(itemConfig);
      }
      return this.generateMenuItem(itemConfig);
    })
  }

  generateSubMenu = (subMenuConfig: IRouteOption) => {
    const { children, path, icon, title } = subMenuConfig;
    return (
      <Menu.SubMenu
        title={<span>{this.generateSvgIcon(icon)}{title}</span>}
        key={path}
      >
        {this.generateMenu(children)}
      </Menu.SubMenu>
    );
  }

  generateSvgIcon = (icon: string) => {
    if (!icon) { return '' }
    return <SvgIcon name={icon} size={16} />;
  }

  generateMenuItem = (menuItemConfig: IRouteOption) => {
    const { path, icon, title } = menuItemConfig;
    return (
      <Menu.Item
        key={path}
      >
        <span>{this.generateSvgIcon(icon)}{title}</span>
      </Menu.Item>
    );
  }

  changeRouteHandle = ({ key }: any) => {
    if (this.state.selectedKey === key) { return; }
    this.setState({ selectedKey: key }, () => {
      this.props.history.replace(key);
    });
  }

  render() {
    const { selectedKey } = this.state;
    const { routes } = this.props;
    return (
      <div className="g-left-menu">
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={this.changeRouteHandle}
        >
          {this.generateMenu(menuConfig())}
        </Menu>
      </div>
    )
  }
}

export default LeftMenu
