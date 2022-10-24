import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/price',
        name: 'Price',
        children: [
            {
                name: 'PriceStandard',
                path: '/price/standard',
                component: () => import('./views/Price/Standard.vue')
            },
            {
                name: 'PriceProfessional',
                path: '/price/professional',
                component: () => import('./views/Price/Professional.vue')
            },
            {
                name: 'PricePrivate',
                path: '/price/private',
                component: () => import('./views/Price/Private.vue')
            },
            {
                name: 'PriceMobile',
                path: '/price/mobile',
                component: () => import('./views/Price/Mobile.vue')
            },
            {
                name: 'PriceVPN',
                path: '/price/vpn',
                component: () => import('./views/Price/VPN.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue')
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: () => import('./views/Reviews.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import('./views/FAQ.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('./views/Contacts.vue')
    },
    {
        path: '/rules',
        name: 'Rules',
        component: () => import('./views/Contacts.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to) => {
    return to.name !== 'Price';
});

export default router;