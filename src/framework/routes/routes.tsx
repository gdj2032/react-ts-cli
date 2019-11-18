import Container from '@/framework/container';
import Login from '@/framework/login';
import UserPagePath from '@/pages/pageRoutes'
import autoImport from './autoImport';
import Home from '../home';

export const PathConfig = {
    login: '/login',
    home: '/',
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
                component: Home, // 默认到home页
                exact: true,
            },
        ],
    },
];
