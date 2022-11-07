import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        plugins: [
            vue(),

            createHtmlPlugin({
                entry: 'src/main.ts',

                inject: {
                    data: {
                        title: process.env.VITE_APP_NAME
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
};