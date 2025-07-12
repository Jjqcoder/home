import { createApp } from 'vue'
// import './style.css'

/* introducing element-plus start */ 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* introducing element-plus end */ 

import App from './App.vue'

const app = createApp(App)
/* use element-plus start*/ 
app.use(ElementPlus)
/* use element-plus end*/ 
app.mount('#app')
