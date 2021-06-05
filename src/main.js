import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'
import VueGtag from 'vue-gtag'
import 'normalize.css'
import '@/assets/scss/styles.scss'

import ChangeSlide from '@/components/Global/ChangeSlide'

const app = createApp(App)
app.use(VueGtag, {
  config: { id: 'G-RTR3N8CKQ3' }
})
app.provide('gsap', gsap)
app.component('ChangeSlide', ChangeSlide)
app.mount('#app')
