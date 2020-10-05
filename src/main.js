import { createApp } from 'vue'
import { install } from '@/library'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const sdui = createApp(App)
install(sdui)
sdui.use(router).mount('#app')
