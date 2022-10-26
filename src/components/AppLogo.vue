<template>
    <component :is="componentTag" :to="routerLinkTo">
        <img :src="imageFull" :alt="appName">
    </component>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import imageFull from '../assets/app/logo--full.png';

    const props = defineProps({
        withoutLink: Boolean
    });

    const appName = import.meta.env.VITE_APP_NAME;
    const componentTag = computed(() => props.withoutLink ? 'div' : 'router-link');
    const routerLinkTo = computed(() => props.withoutLink ? undefined : { name: 'Home' });
</script>