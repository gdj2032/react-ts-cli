import { PathConfig } from "../framework/routes";

export interface IHomeMenu {
  title: string;
  path: string;
  icon: string;
}

const HomeMenuConfig = () => {
  if (!PathConfig) return [];
  const menu: IHomeMenu[] = [
    {
      title: '测试1',
      path: PathConfig.test1,
      icon: '',
    },
    {
      title: '测试2',
      path: PathConfig.test2,
      icon: '',
    },
  ];
  return menu;
}

export default HomeMenuConfig;
