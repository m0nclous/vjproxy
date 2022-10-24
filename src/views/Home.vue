<template>
    <section class="page-content">
        <Packs />
        <Advantages />
    </section>
</template>

<script lang="ts" setup>
    import Packs from '../components/Packs.vue';
    import Advantages from '../components/Advantages.vue';
</script>

<style lang="scss" scoped>
    .page-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>