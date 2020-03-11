import { PathConfig } from "../commentwork/routes";

export interface IHomeMenu {
  title: string;
  path: string;
  icon: string;
}

const HomeMenuConfig = () => {
  if (!PathConfig) return [];
  const menu: IHomeMenu[] = [
    {
      title: '秒杀',
      path: PathConfig.seckill,
      icon: '',
    },
    {
      title: '优惠券',
      path: PathConfig.coupon,
      icon: '',
    },
    {
      title: 'Plus会员',
      path: PathConfig.plusVip,
      icon: '',
    },
  ];
  return menu;
}

export default HomeMenuConfig;
