import Container from '@/framework/container';
import Login from '@/framework/login';
import UserPagePath from '@/pages/pageRoutes'
import autoImport from './autoImport';
import Home from '../home';
import Register from '../register';

export const PathConfig = {
    login: '/login',
    register: '/register',
    home: '/',
    ...UserPagePath,
};

export const loginRoute: IRouteOption[] = [
    {
        component: Login,
        path: PathConfig.login,
    },
    {
        component: Register,
        path: PathConfig.register,
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
        component: Register,
        path: PathConfig.register,
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
