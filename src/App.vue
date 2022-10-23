<template>
    <Header />
    <router-view />
    <Footer />

    <div id="particles-js"></div>
</template>

<script lang="ts" setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>

<style lang="scss" scoped>
    #particles-js {
        position: fixed;
        top: 0;

        height: 100%;
        width: 100%;
        max-width: unset;

        background-image: url(./assets/sky.png);
        background-size: cover;

        z-index: -1;
    }
</style>