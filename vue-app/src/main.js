import { createApp } from 'vue'
import App from './App.vue'
//Applying global css (custom css   )
import './assets/global.css'
//Applying Global CSS From Elemental + UI(CSS Framework)
import 'element-plus/dist/index.css'

import ElementPlus from 'element-plus'
let app = createApp(App)
app.use(ElementPlus)
    
app.mount('#app')

