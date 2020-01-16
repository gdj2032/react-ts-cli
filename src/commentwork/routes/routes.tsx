import Container from '@/commentwork/container';
import Login from '@/commentwork/login';
import UserPagePath from '@/pages/pageRoutes'
import autoImport from './autoImport';
import Home from '../home';
import Register from '../register';
import { IRouteOption } from './index.d';

export const PathConfig = {
    login: '/login',
    register: '/register',
    home: '/home',
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
                component: Home,
                exact: true,
            },
            {
                path: '/home',
                component: Home,
                exact: true,
            },
        ],
    },
];
