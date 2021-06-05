import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'
import 'normalize.css'
import '@/assets/scss/styles.scss'

import ChangeSlide from '@/components/Global/ChangeSlide'

const app = createApp(App)
app.provide('gsap', gsap)
app.component('ChangeSlide', ChangeSlide)
app.mount('#app')
