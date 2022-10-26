import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    server: {
        watch: {
            usePolling: true
        }
    },

    plugins: [
        vue(),

        createHtmlPlugin({
            entry: 'src/main.ts',

            inject: {
                data: {
                    title: 'VJProxy'
                },

                tags: [
                    {
                        injectTo: 'body-prepend',
                        tag: 'div',
                        attrs: {
                            id: 'app'
                        }
                    }
                ]
            }
        })
    ]
});