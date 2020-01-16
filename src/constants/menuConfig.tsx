import { PathConfig } from "@/framework/routes";

const menuConfig = () => {
  if(!PathConfig) return [];

const menu: IRouteOption[] = [
  {
      title: 'Home',
      path: PathConfig.home,
      icon: 'succeed',
      children: [
        {
          title: 'home',
          path: PathConfig.home,
          icon: '',
        },
        {
          title: 'EXIF',
          path: PathConfig.homeExif,
          icon: '',
        },
        {
          title: 'ToolTip',
          path: PathConfig.homeTooltip,
          icon: '',
        },
      ]
  },
  {
      title: 'CSS3',
      path: PathConfig.css,
      icon: 'succeed',
      children: [
        {
          title: 'CSS3 主页',
          path: PathConfig.css,
          icon: '',
        },
        {
          title: '动画animate',
          path: PathConfig.cssAnimate,
          icon: '',
        },
        {
          title: '盒模型',
          path: PathConfig.cssBoxmodal,
          icon: '',
        },
        {
          title: '定位详解',
          path: PathConfig.cssPosition,
          icon: '',
        },
      ]
  },
  {
      title: 'RN',
      path: PathConfig.reactnative,
      icon: 'succeed',
  },
];
  return menu;
}


export default menuConfig;
