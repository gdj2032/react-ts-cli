// 此文件为编译时自动生成的代码，请勿更改, 改了也没有用
import { createPath } from './utils';
const pageRoutes = {
	coupon: '/coupon',
	goods: (id) => createPath('/goods/:id', { id }),
	plusVip: '/plusVip',
	seckill: '/seckill',
};
export default pageRoutes;
