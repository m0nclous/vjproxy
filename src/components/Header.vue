<template>
    <header>
        <div class="container">
            <router-link :to="{ name: 'Home'}" class="logo">
                <img :src="logoUrl" alt="VJProxy">
            </router-link>

            <nav>

                <router-link :to="{ name: 'Price'}">
                    Цены

                    <nav>
                        <router-link :to="{ name: 'PriceStandard'}">Стандартные прокси</router-link>
                        <router-link :to="{ name: 'PriceProfessional'}">Профессиональные прокси</router-link>
                        <router-link :to="{ name: 'PricePrivate'}">Приватные прокси</router-link>
                        <router-link :to="{ name: 'PriceMobile'}">Мобильные прокси</router-link>
                        <router-link :to="{ name: 'PriceVPN'}">VPN</router-link>
                    </nav>
                </router-link>

                <router-link :to="{ name: 'About'}">О компании</router-link>
                <router-link :to="{ name: 'Reviews'}">Отзывы</router-link>
                <router-link :to="{ name: 'FAQ'}">FAQ</router-link>
                <router-link :to="{ name: 'Contacts'}">Контакты</router-link>
            </nav>

            <a href="https://lk.vjproxy.com/login" class="btn">Личный кабинет</a>
        </div>
    </header>
</template>

<script lang="ts" setup>
    import logoUrl from '../assets/logo.png';
</script>

<style lang="scss" scoped>
    header {
        $height: 60px;
        $padding-top: 10px;

        position: sticky;
        top: 0;

        width: 100%;
        height: $height;
        margin-top: -$height - $padding-top - $padding-top;
        padding-top: $padding-top;
        padding-bottom: $padding-top;

        z-index: 100;

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;

            backdrop-filter: blur(2px);
            z-index: -2;
        }

        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }
    }

    .logo {
        display: block;
        height: 100%;

        img {
            height: 100%;
        }
    }

    nav {
        display: flex;
        gap: 40px;

        a {
            position: relative;
            text-decoration: none;
            align-self: start;

            font-weight: 600;
            color: var(--color-blue-100);

            transition: color .3s;

            &:after {
                content: '';
                display: block;

                position: absolute;
                width: 0;
                height: 2px;
                left: 0;
                top: 20px;

                background-color: var(--color-blue-200);
                transition: width .3s;
            }

            &:hover {
                color: var(--color-white);

                &:after {
                    width: 100%;
                }

                > nav {
                    display: flex;
                }
            }

            > nav {
                display: none;

                flex-direction: column;
                gap: 10px;

                position: absolute;
                left: 15px;
                padding-top: 15px;

                white-space: nowrap;
            }
        }
    }
</style>