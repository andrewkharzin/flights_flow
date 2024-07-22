// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: false },
  // exp
  experimental: {
    localLayerAliases: true,
  },
   // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  compatibilityDate: "2024-07-03",
  modules: [
    "@nuxtjs/supabase",
    "nuxt-headlessui",
    '@nuxtjs/color-mode',
    "@nuxt/icon",
    '@nuxt/image',
    '@nuxt/content',
    "nuxt-svgo",
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
   // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },
  supabase: {
    redirect: true,
  },
  
});