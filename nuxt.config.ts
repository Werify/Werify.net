// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        config: {
            content: [
                'content/**/**.md'
            ],
            theme: {
                extend: {
                    colors: {
                        primary: '#2222ad',
                        primary_light: '#dee0f3',
                        ghost_white: '#f7f6fb',
                        black_color: '#444444',
                        grey: '#f0f0f0',
                        purple: '#707ac9',
                        light_purple: '#d4d7ef'
                    }
                }

            }
        }
    }
})
