// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxt/ui',
  ],
  imports:{
    dirs:[
      'components',
      'composables/*/index.{ts,js,mjs,mts}',
      'composeables/**'
    ]
  }
})
