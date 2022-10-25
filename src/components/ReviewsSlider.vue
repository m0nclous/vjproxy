<template>
    <div class="reviews">
        <div class="container">
            <h2>Отзывы</h2>

            <Carousel :autoplay="5000" :transition="500" :items-to-show="2" snapAlign="start" :wrap-around="true">
                <Slide v-for="(slide, index) in slides" :key="index">
                    <div class="slide">
                        <div class="slide__username">{{ slide.username }}</div>
                        <div class="slide__date">{{ slide.date }}</div>
                        <div class="slide__message">{{ slide.message }}</div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>

            <router-link :to="{ name: 'Reviews' }" class="btn">Все отзывы</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Navigation } from 'vue3-carousel';


    const slides = [
        {
            username: 'TroubleJS',
            date: '06.08.2020',
            message: 'Не первый раз покупаю приват прокси, всё супер. Рекомендую.',
        },
        {
            username: 'Arena30r',
            date: '23.02.2019',
            message: 'Отличный сервис, все на уровне, от саппорта до качества прокси, давно хотел сменить прокси, и вот нашел: скорость просто отличная, отношение к клиенту такое же. Процветания сервису.',
        },
        {
            username: 'Mobile',
            date: '16.10.2018',
            message: 'VJProxy отличный, качественный сервис, который не первый год на рынке и завоевал доверие пользователей. Команда проекта-серьёзные профессионалы, которые знают своё дело. Служба поддержки работает оперативно и качественно. Вежливы и доброжелательны.',
        }
    ];
</script>

<style lang="scss" scoped>
    .reviews {
        width: 100%;
        text-align: center;
    }

    h2 {
        text-align: center;
        font-size: 32px;
        color: var(--color-white);
        margin: 45px 0;
    }

    .carousel {
        user-select: none;

        width: calc(100% - 40px * 2);
        margin: auto;

        &__slide {
            padding: 0 15px;
        }
    }

    .carousel:deep(.carousel__prev) {
        left: -45px;
    }

    .carousel:deep(.carousel__next) {
        right: -45px;
    }

    .slide {
        border-radius: 10px;
        flex-direction: column;
        background: var(--color-white) url(../assets/quote.png) no-repeat right top;
        box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
        padding: 30px;
        box-sizing: border-box;
        line-height: 24px;
        min-height: 270px;

        &__username {
            font-weight: 600;
            font-size: 1.25rem;
        }

        &__date {
            font-weight: 300;
            font-size: 1rem;
            color: var(--color-gray-100);
            margin-bottom: 12px;
        }
    }

    a {
        margin: 40px 0 100px;
    }
</style>