import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/fontawesome-free-6.3.0-web/css/all.min.css'

createApp(App)
.use(router)
.use(store)
.mount('#app')
