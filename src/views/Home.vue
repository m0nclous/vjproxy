<template>
    <section class="top-info">
        <section class="container promotion">
            <div>
                <h1>
                    <span class="highlight">Приватный</span> прокси сервис и VPN
                </h1>

                <div class="online-proxy">
                    <span class="counter">192 557</span> Прокси сейчас работает
                </div>

                <div class="d-flex gap-2">
                    <a href="https://lk.vjproxy.com/login" class="btn btn--transparent">
                        Купить прокси
                    </a>

                    <div class="btn btn--transparent">
                        Задать вопрос
                    </div>
                </div>
            </div>

            <div class="carousel--wrapper">
                <carousel :autoplay="3000" :transition="500" :wrap-around="true">
                    <slide v-for="(slide, index) in slides" :key="index">
                        <h2 class="highlight">{{ slide.title }}</h2>
                        <h2 v-if="slide.subTitle">{{ slide.subTitle }}</h2>
                        <div>{{ slide.content }}</div>
                        <router-link :to="{ name: slide.route }" class="btn">Подробнее</router-link>
                    </slide>

                    <template #addons>
                        <pagination />
                    </template>
                </carousel>
            </div>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination } from 'vue3-carousel';

    const slides = [
        {
            title: 'VJProxy',
            subTitle: '',
            content: 'Вы нашли то, что искали',
            route: 'About'

        },
        {
            title: 'Стандартные',
            subTitle: 'ПРОКСИ',
            content: 'Ваш оптимальный выбор',
            route: 'PriceStandard'

        },
        {
            title: 'Профессиональные',
            subTitle: 'ПРОКСИ',
            content: 'За гранью возможного',
            route: 'PriceProfessional'

        },
        {
            title: 'Приватные',
            subTitle: 'ПРОКСИ',
            content: 'Личный комфорт',
            route: 'PricePrivate'

        },
        {
            title: 'Мобильные',
            subTitle: 'ПРОКСИ',
            content: 'TODO TODO TODO',
            route: 'PriceMobile'

        },
        {
            title: 'VPN',
            subTitle: '',
            content: 'Ваша личная безопасная сеть',
            route: 'PriceVPN'
        }
    ];
</script>

<style lang="scss" scoped>
    .promotion {
        display: grid;
        margin-top: 50px;
        grid-template-columns: 1fr 1fr;
        color: var(--color-white);
    }

    .online-proxy {
        margin: 30px 0;
    }

    .carousel--wrapper {
        overflow: hidden;
    }

    .carousel, .carousel:deep(.carousel__viewport), .carousel:deep(.carousel__track) {
        height: 100%;
    }

    .carousel:deep(.carousel__viewport) {
        border-radius: 10px;
        background-size: cover;
        background: rgba(4, 167, 219, 0.2) url(../assets/map.png) no-repeat center;
    }

    .carousel:deep(.carousel__slide) {
        flex-direction: column;
        gap: 15px;

        cursor: default;

        h2 {
            font-size: 2.5rem;
            margin: 0;
        }
    }

    .carousel:deep(.carousel__pagination) {
        position: absolute;
        bottom: 25px;
        right: 25px;
        gap: 10px;

        .carousel__pagination-button {
            background-color: var(--color-white);
            border-radius: 25px;
            transition: .3s;
            width: 15px;
            height: 15px;
            opacity: .3;

            &--active {
                background-color: var(--color-blue-200);
                opacity: 1;
            }
            
            &:after {
                display: none;
            }
        }
    }

    h1 {
        font-size: 3rem;
        margin: 0;
    }

    .highlight {
        color: var(--color-blue-200);
    }

    .counter {
        position: relative;
        display: inline-block;
        background-color: #0458A6;
        border-radius: 20px;
        padding: 7px 20px;
        font-weight: 700;
        margin-right: 5px;

        color: var(--color-blue-200);
    }
</style>