<template>
    <Header />

    <main>
        <router-view />
    </main>

    <div id="particles-js"></div>
</template>

<script lang="ts" setup>
    import Header from './components/Header.vue';
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

    main {
        $header-height: 60px + 10px;
        padding-top: $header-height;

        background: linear-gradient(90deg, #041E87 .1%, #04A0CC 100%);

        height: 400px;
        width: 100%;
        max-width: unset !important;

        color: white;
    }
</style>