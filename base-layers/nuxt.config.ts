// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-icon",
    "@nuxt/image-edge",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        defaultLocale: "en",
        langDir: "./locales/",
        locales: [
          {
            code: "en",
            iso: "en-US",
            file: "en.ts",
            dir: "ltr",
          },
          {
            code: "tr",
            iso: "tr-IS",
            file: "tr.ts",
            dir: "ltr",
          },
          {
            code: "ar",
            iso: "ar-UAE",
            file: "ar.ts",
            dir: "rtl",
          },
          {
            code: "fa",
            iso: "fa-IR",
            file: "fa.ts",
            dir: "rtl",
          },
        ],
      },
    ],
  ],
});
