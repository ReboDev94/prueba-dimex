// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-svgo",
    "@pinia/nuxt",
    "dayjs-nuxt"
  ],
  googleFonts: {
    families: {
      Quicksand: {
        wght: '300..700',
      },
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  components: [
    { path: '~/components/dimex', prefix: 'dimex' },
    { path: '~/components/common', pathPrefix: false },
    { path: '~/components/common/Dashboard/CardStatistics', prefix: 'cardStatistics' },
    { path: '~/components/common/Navbar', prefix: 'navbar' },
    { path: '~/components/common/Evaluations', prefix: 'evaluations' },
    '~/components',
  ]
})