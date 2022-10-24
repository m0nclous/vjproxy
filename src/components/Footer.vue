<template>
    <footer>
        <div class="container">
            <div class="contacts">
                <a
                    v-for="contact in contacts"
                    :class="['contacts__item', `contacts__item--${contact.type}`, 'link--without-underline']"
                    :href="contact.href">
                    {{ contact.text }}
                </a>
            </div>

            <div class="copyright">
                &copy; Copyright 2022
                VJProxy
                |
                <router-link :to="{ name: 'Rules'}" class="link--primary link--without-underline">Условия использования</router-link>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    const contacts = [
        {
            text: 'support@vjproxy.com',
            type: 'email',
            href: 'mailto:support@vjproxy.com'
        },
        {
            text: 'support@vjproxy.com',
            type: 'skype',
            href: 'skype:support@vjproxy.com'
        },
        {
            text: 'support@vjproxy.com',
            type: 'jabber',
            href: 'xmpp:support@vjproxy.com'
        },
        {
            text: '@vjproxy',
            type: 'telegram',
            href: 'tg://resolve?domain=@vjproxy'
        }
    ];
</script>

<style lang="scss" scoped>
    footer {
        width: 100%;
        padding-bottom: 30px;
        padding-top: 60px;
        background-color: var(--color-black-blue-100);
        color: var(--color-gray-100);
    }

    .contacts {
        display: flex;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 15px;

            width: 280px;
            text-align: center;
            color: var(--color-white);
            font-size: 1.3rem;

            &:not(:last-child) {
                border-right: 1px solid var(--color-gray-300);
            }

            &::before {
                content: '';
                display: block;
                height: 30px;

                background-repeat: no-repeat;
                background-position: center;
            }

            &::after {
                display: block;

                font-weight: 300;
                font-size: 1.1rem;
                color: var(--color-gray-200);
            }

            &--email {
                &::before {
                    background-image: url(../assets/email.png);
                }

                &::after {
                    content: 'Почта';
                }
            }

            &--skype {
                &::before {
                    background-image: url(../assets/skype.png);
                }

                &::after {
                    content: 'Скайп';
                }
            }

            &--jabber {
                &::before {
                    background-image: url(../assets/jabber.png);
                }

                &::after {
                    content: 'Jabber';
                }
            }

            &--telegram {
                &::before {
                    background-image: url(../assets/telegram.png);
                }

                &::after {
                    content: 'Телеграм';
                }
            }
        }
    }

    .copyright {
        margin-top: 45px;
        font-size: 1rem;
        text-align: center;
    }
</style>