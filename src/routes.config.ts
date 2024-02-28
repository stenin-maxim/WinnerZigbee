import { Routes } from '@ray-js/types';

export const routes: Routes = [
    {
        route: '/',
        path: '/pages/home/index',
        name: 'Home',
    },
    {
        route: '/sensors',
        path: '/pages/sensors/index',
        name: 'Sensors',
    },
    {
        route: '/settings',
        path: '/pages/settings/index',
        name: 'Settings',
    },
    {
        route: '/counter-1',
        path: '/pages/counter-1/index',
        name: 'Counter 1',
    },
    {
        route: '/counter-2',
        path: '/pages/counter-2/index',
        name: 'Counter 2',
    },
    {
        route: '/journal',
        path: '/pages/journal/index',
        name: 'History',
    },
];

export const tabBar = {};
