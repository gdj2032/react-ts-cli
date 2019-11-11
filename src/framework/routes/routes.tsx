import Container from '@/framework/container';
import Login from '@/framework/login';
import UserPagePath from '@/pages/pageRoutes'
import autoImport from './autoImport';

export const PathConfig = {
    login: '/login',
    ...UserPagePath,
};

export const loginRoute: IRouteOption[] = [
    {
        component: Login,
        path: PathConfig.login,
    },
    {
        redirect: PathConfig.login,
    },
];

export const pageRoute: IRouteOption[] = [
    {
        component: Login,
        path: PathConfig.login,
    },
    {
        path: '/',
        component: Container,
        children: [
            ...autoImport(),
            {
                path: '/',
                component: () => (''), // 默认到达一个空白页，避免刚进来闪404页面，Menu组件会自动导航到菜单对应的第一页
                exact: true,
            },
        ],
    },
];
