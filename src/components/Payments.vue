<template>
    <div class="payments">
        <div class="container">
            <h2>Удобные способы оплаты</h2>

            <div class="payments-list">
                <div v-for="payment in payments" class="payments-item">
                    <img :src="payment.img.src" :alt="payment.img.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import visa from '../assets/payments/visa.png';
    import mastercard from '../assets/payments/mastercard.png';
    import mir from '../assets/payments/mir.png';
    import yandex from '../assets/payments/yandex.png';
    import qiwi from '../assets/payments/qiwi.png';
    import bitcoin from '../assets/payments/bitcoin.png';
    import webmoney from '../assets/payments/webmoney.png';

    const payments = [
        {
            img: {
                src: visa,
                alt: 'Visa'
            }
        },
        {
            img: {
                src: mastercard,
                alt: 'Mastercard'
            }
        },
        {
            img: {
                src: mir,
                alt: 'MIR'
            }
        },
        {
            img: {
                src: yandex,
                alt: 'Yandex Money'
            }
        },
        {
            img: {
                src: qiwi,
                alt: 'QIWI'
            }
        },
        {
            img: {
                src: bitcoin,
                alt: 'Bitcoin'
            }
        },
        {
            img: {
                src: webmoney,
                alt: 'Webmoney'
            }
        }
    ];
</script>

<style lang="scss" scoped>
    .payments {
        width: 100%;
        background: #FFFFFFD1;
        padding: 100px 0;

        &-list {
            display: flex;
        }
    }

    h2 {
        font-size: 2rem;
        color: var(--color-black);
        text-align: center;
    }
</style>