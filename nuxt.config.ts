// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "@nuxt/content"
  ],
  app: {
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#1e293b",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    }
  },
  colorMode: {
    fallback: "dark",
    classSuffix: ""
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  image: {
    inject: true
  },
  sitemap: {
    exclude: ['/default', '/events'],
  },
  css: ["~/assets/css/main.css"],
});
