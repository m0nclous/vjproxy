<template>
    <section class="where-use">
        <div class="container">
            <div class="content">
                <h2>Где использовать</h2>

                <p>
                    Способов применения IPv4 прокси достаточно много, к примеру, если вы хотите оставаться
                    анонимными в сети и спрятать свой IP-адрес. Кроме смены региона внутри страны, используя прокси
                    вы можете сменить свой адрес на адреса других стран.
                    У нас можно купить прокси следующих стран: Германия, Китай, США, Украина, Россия, Индия, Италия,
                    Нидерланды, Китай, Франция, Англия, Япония, Великобритания и многих других, их список постоянно
                    увеличивается.
                </p>

                <p>
                    Предоставляемые нашим магазином прокси подходят для парсинга и сбора ключевых фраз в сервисе
                    яндекса – WordStat или в Key Collector`e, а так же для продвижения аккаунтов в социальных сетях
                    – Инстаграм, Вконтакте, Фейсбуке, Ютубе, для размещения
                    объявлений на ЮЛЕ, Авито и OLX. Для социальных сетей создано множество программ и сервисов,
                    таких как: Sobot, Brobot, Postmypost, Poster PRO, Lizard Program, VkJust, ViKing Botovod,
                    SocialHammer, Smmplaner, SocialKit, Botsapp, Instap, Tooligram,
                    и для каждого из них нужны индивидуальные прокси.
                </p>

                <p>Ознакомьтесь с полным <a href="#" class="link--dotted link--blue">списком наших прокси </a>и их предназначением</p>

                <div class="statistics-list">
                    <div v-for="statistic in statistics" class="statistics-item">
                        <h2>{{ statistic.label }}</h2>
                        {{ statistic.text }}
                    </div>
                </div>
            </div>

            <img :src="proxy" alt="VJProxy">
        </div>
    </section>
</template>

<script lang="ts" setup>
    import proxy from '../assets/proxy.png';

    const statistics = [
        {
            text: 'Стандартных прокси',
            label: '192 531'
        },
        {
            text: 'Стран приватных прокси',
            label: '26'
        },
        {
            text: 'Стран VPN',
            label: '17'
        }
    ];
</script>

<style lang="scss" scoped>
    .where-use {
        background: #FFFFFFD1;
        padding: 100px 0;
        width: 100%;
    }

    .container {
        display: grid;
        grid-template-columns: 7fr 3fr;
        grid-gap: 10px;
        align-items: center;
        width: 72%;
        position: relative;
    }

    .content {
        padding-bottom: 116px;
    }

    .statistics {
        &-list {
            position: absolute;
            display: flex;
            background: var(--color-white);
            box-shadow: 0 3px 10px rgb(192 218 244 / 92%);
            border-radius: 10px;
            padding: 30px 50px 22px;
        }

        &-item {
            width: 250px;
            font-weight: bold;
            font-size: 1rem;
            text-align: center;
            color: var(--color-gray-200);

            &:not(:last-child) {
                border-right: 1px #DFE8F1 solid;
            }

            h2 {
                margin: 0;
                font-weight: bold;
                font-size: 45px;
                line-height: 45px;
                text-align: center;
                color: var(--color-gray-200);
                background: -webkit-linear-gradient(0deg, var(--color-blue-300) 0%, var(--color-blue-200) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }

    h2 {
        font-size: 2.4rem;
    }

    p {
        line-height: 22px;
        font-size: 1.2rem;
        color: var(--color-gray-200);

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
</style>