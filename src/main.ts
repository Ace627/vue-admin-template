import { createApp } from 'vue'
import './styles/index.scss' // 引入全局样式表
import router from './router' // 引入路由配置文件
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
