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
        route: '/instructions',
        path: '/pages/instruction/index',
        name: 'Instructions',
    },
    // {
    //     route: '/counters',
    //     path: '/pages/counters/index',
    //     name: 'Counters',
    // },
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
];

export const tabBar = {};
