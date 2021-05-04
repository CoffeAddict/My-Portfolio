import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'
import 'normalize.css'
import '@/assets/styles.scss'

const app = createApp(App)

app.provide('gsap', gsap)
app.mount('#app')
