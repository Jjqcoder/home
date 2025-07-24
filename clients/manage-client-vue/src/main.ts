import { createApp } from 'vue'
// import './style.css'

/* introducing element-plus start */ 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* introducing element-plus end */ 

/* introducing vue-router start */
import router from './router'
/* introducing vue-router end */

import App from './App.vue'

const app = createApp(App)
/* use element-plus start*/ 
app.use(ElementPlus)
/* use element-plus end*/ 

/* use vue-router start */
app.use(router)
/* use vue-router end */

app.mount('#app')
