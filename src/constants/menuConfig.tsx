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
      title: 'test1',
      path: PathConfig.test1,
      icon: 'succeed',
  },
];
  return menu;
}


export default menuConfig;
