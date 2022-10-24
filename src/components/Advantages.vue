<template>
    <div class="advantages">
        <div class="container">
            <h2>Преимущества</h2>

            <div class="advantages-list">
                <div v-for="advantage in advantages" class="advantages-item">
                    <img :src="advantage.image.src" :alt="advantage.image.alt">
                    <div>{{ advantage.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import image1 from '../assets/advantages/1.png';
    import image2 from '../assets/advantages/2.png';
    import image3 from '../assets/advantages/3.png';
    import image4 from '../assets/advantages/4.png';
    import image5 from '../assets/advantages/5.png';
    import image6 from '../assets/advantages/6.png';

    const advantages = [
        {
            text: 'Все купленные у нас прокси имеют возможность подключения по сетевым протоколам HTTP(s) и SOCKS',
            image: {
                src: image1,
                alt: 'Протоколы HTTP(s) и SOCKS'
            }
        },
        {
            text: 'Качественная тех. поддержка через Jabber, Skype, Telegram',
            image: {
                src: image2,
                alt: 'Качественная тех. поддержка'
            }
        },
        {
            text: 'Возврат денежных средств в течение 24 часов (кроме суточных пакетов)',
            image: {
                src: image3,
                alt: 'Возврат денежных средств'
            }
        },
        {
            text: 'Высокая скорость наших прокси обеспечит Вам максимальный комфорт',
            image: {
                src: image4,
                alt: 'Высокая скорость'
            }
        },
        {
            text: 'Выбор прокси со всего мира',
            image: {
                src: image5,
                alt: 'Прокси со всего мира'
            }
        },
        {
            text: 'Digital Resistance Ваши данные под надежной защитой',
            image: {
                src: image6,
                alt: 'Надежная защита'
            }
        }
    ];
</script>

<style lang="scss" scoped>
    .advantages {
        background: #FFFFFFA6;
        padding: 100px 0;
        width: 100%;

        color: var(--color-black-blue-100);

        h2 {
            text-align: center;

            margin-top: 0;
            margin-bottom: 60px;

            font-size: 2.3rem;
        }

        &-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 40px;
            grid-column-gap: 30px;

            font-weight: bold;
            font-size: 1.2rem;
        }

        &-item {
            display: flex;
            flex-direction: column;
            gap: 20px;

            img {
                width: 90px;
            }
        }
    }
</style>