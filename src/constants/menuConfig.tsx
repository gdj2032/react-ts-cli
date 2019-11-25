import { PathConfig } from "@/framework/routes";

const menuConfig = () => {
  if(!PathConfig) return [];

const menu: IRouteOption[] = [
  {
      title: 'home',
      path: PathConfig.home,
      icon: 'succeed',
  },
  {
      title: 'CSS3',
      path: PathConfig.css3,
      icon: 'succeed',
      children: [
        {
          title: 'CSS3 主页',
          path: PathConfig.css3,
          icon: '',
        },
        {
          title: '动画animate',
          path: PathConfig.css3Animate,
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
