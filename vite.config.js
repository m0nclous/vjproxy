import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        watch: {
            usePolling: true
        }
    },

    plugins: [
        vue()
    ]
});