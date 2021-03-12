import { createApp } from 'vue'
import { sdInstall } from '@strizich/sdui'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
sdInstall(app)

app.use(router).mount('#app')
