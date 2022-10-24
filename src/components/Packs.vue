<template>
    <div class="packs">
        <h2>Наши тарифы</h2>

        <div class="packs-list">
            <div v-for="pack in packs" class="packs-item">
                <div class="packs-item__name">{{ pack.name }}</div>

                <div class="packs-item__price">
                    <span>{{ pack.price.label }}</span>
                    <div>${{ pack.price.value }}</div>
                </div>

                <div class="packs-item__benefits">
                    <div v-for="benefit in pack.benefits">{{ benefit }}</div>
                </div>

                <div class="packs-item__footer">
                    <a class="btn" href="https://lk.vjproxy.com/login">Купить прокси</a>
                    <router-link :to="pack.link" class="link--dotted link--blue">Подробнее</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const packs = [
        {
            name: 'Стандартные прокси',
            link: '/price/standard#price-list',

            price: {
                label: 'в сутки от',
                value: 8,
            },

            benefits: [
                'SOCKS4/4a, SOCKS5, HTTP, HTTPS\nПоддерживаем все протоколы',
                'Каждые 2 часа обновление до 20% адресов в пакете',
                'Выбор пакетов из самых разных стран',
                'Прокси для большинства задач',
                'Возврат денежных средств в течение 24 часов (кроме суточных пакетов)'
            ]
        },
        {
            name: 'Профессиональные прокси',
            link: '/price/professional#price-list',

            price: {
                label: 'в сутки от',
                value: 4,
            },

            benefits: [
                'SOCKS5, HTTP, HTTPS\nПоддерживаем основные протоколы',
                'Автоматическое обновление адресов в пакете',
                'Повышенная скорость работы прокси',
                'Прокси для большинства задач',
                'Возврат денежных средств в течение 24 часов (кроме суточных пакетов)'
            ]
        },
        {
            name: 'Приватные прокси',
            link: '/price/private#price-list',

            price: {
                label: 'в месяц от',
                value: 5,
            },

            benefits: [
                'SOCKS4/4a, SOCKS5, HTTP, HTTPS\nПоддерживаем все протоколы',
                'Запрещено: Почтовые рассылки, кардинг, фишинг, брут, и любые подобные виды деятельности.',
                '1 статичный IP адрес',
                'Вы первый и единственный владелец',
                'Подходит как для коммерческой так для и индивидуальной деятельности в Интернете'
            ]
        }
    ];
</script>

<style lang="scss" scoped>
    .packs {
        margin: 100px 0;

        h2 {
            color: var(--color-white);
            text-align: center;

            margin-top: 0;
            margin-bottom: 60px;

            font-size: 2rem;
        }

        &-list {
            display: flex;
            gap: 30px;
            justify-content: center;
        }

        &-item {
            position: relative;

            padding: 35px 30px 35px;
            width: 350px;

            background: var(--color-white);
            box-shadow: 0 1px 10px rgb(4 44 142 / 60%);
            border-radius: 10px;

            text-align: center;
            overflow: hidden;

            &::before {
                content: '';
                display: block;
                width: 100%;
                height: 10px;

                position: absolute;
                left: 0;
                top: 0;

                background: linear-gradient(90deg, var(--color-blue-300) 0%, var(--color-blue-200) 100%);
            }

            &__name {
                font-weight: 600;
                font-size: 1.47rem;
                min-height: 48px;
                text-transform: uppercase;
                color: var(--color-blue-200);
            }

            &__price {
                padding-bottom: 20px;
                margin-bottom: 27px;
                border-bottom: 1px var(--color-gray-50) solid;

                span {
                    display: inline-block;
                    margin-top: 10px;
                    margin-bottom: 15px;

                    font-weight: 300;
                    font-size: 1.5rem;
                    color: var(--color-gray-200);
                }

                div {
                    line-height: 50px;
                    font-weight: 500;
                    font-size: 50px;
                    color: var(--color-black);
                }
            }

            &__benefits {
                display: flex;
                flex-direction: column;
                gap: 20px;

                min-height: 280px;

                text-align: left;
                margin-bottom: 30px;
                font-size: 1.1rem;
                color: var(--color-gray-200);

                white-space: pre-wrap;

                div {
                    position: relative;
                    margin-left: 15px;

                    &::before {
                        content: '';
                        display: inline-block;
                        width: 20px;
                        height: 15px;

                        margin-right: 10px;

                        position: absolute;
                        left: -25px;
                        top: 5px;

                        background-image: url(../assets/check.png);
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                }
            }

            &__footer {
                display: flex;
                flex-direction: column;
                gap: 15px;
                align-items: center;
            }
        }
    }
</style>