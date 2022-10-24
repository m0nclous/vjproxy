import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
        meta: {
            title: 'Главная'
        }
    },
    {
        path: '/price',
        name: 'Price',
        children: [
            {
                name: 'PriceStandard',
                path: '/price/standard',
                component: () => import('./views/Price/Standard.vue'),
                meta: {
                    title: 'Стандартные прокси'
                }
            },
            {
                name: 'PriceProfessional',
                path: '/price/professional',
                component: () => import('./views/Price/Professional.vue'),
                meta: {
                    title: 'Профессиональные прокси'
                }
            },
            {
                name: 'PricePrivate',
                path: '/price/private',
                component: () => import('./views/Price/Private.vue'),
                meta: {
                    title: 'Приватные прокси'
                }
            },
            {
                name: 'PriceMobile',
                path: '/price/mobile',
                component: () => import('./views/Price/Mobile.vue'),
                meta: {
                    title: 'Мобильные прокси'
                }
            },
            {
                name: 'PriceVPN',
                path: '/price/vpn',
                component: () => import('./views/Price/VPN.vue'),
                meta: {
                    title: 'VPN'
                }
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue'),
        meta: {
            title: 'О нас'
        }
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: () => import('./views/Reviews.vue'),
        meta: {
            title: 'Отзывы'
        }
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import('./views/FAQ.vue'),
        meta: {
            title: 'FAQ'
        }
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('./views/Contacts.vue'),
        meta: {
            title: 'Контакты'
        }
    },
    {
        path: '/rules',
        name: 'Rules',
        component: () => import('./views/Contacts.vue'),
        meta: {
            title: 'Правила использования'
        }
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