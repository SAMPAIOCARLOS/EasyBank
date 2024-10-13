
import { createApp } from 'vue'
import App from './App.vue'

import '../src/assets/styles/global.css'
import router from './routes/index'

createApp(App).use(router).mount('#app');
