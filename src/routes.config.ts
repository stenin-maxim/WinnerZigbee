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
    {
        route: '/counters',
        path: '/pages/counters/index',
        name: 'Counters',
    },
];

export const tabBar = {};
