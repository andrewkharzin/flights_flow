// plugins/vue3-toastify.js
import { defineNuxtPlugin } from '#app'
import Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toastify)
})
