<template>
    <div class="container content-placeholder">
        Тут пока ничего нет, но я работаю над этим!

        <img :src="programmer" alt="m0ncllous">
    </div>
</template>

<script lang="ts" setup>
    import programmer from '../assets/programmer.png';
</script>

<style lang="scss" scoped>
    .content-placeholder {
        display: grid;
        grid-template-columns: 4fr;
        grid-gap: 10px;
        align-items: center;
        position: relative;
        background: #FFF;
        border-radius: 10px;
        padding: 50px 47px 30px;
        /* width: 53%; */
        width: 1110px;
        min-width: 1110px;

        font-weight: normal;
        color: #6B6B6B;
        box-sizing: border-box;

        margin: 100px auto;
        text-align: center;
        font-size: 2rem;
    }

    img {
        width: 100%;
    }
</style>