import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import microApp from '@micro-zoe/micro-app'

microApp.start({
    tagName: 'micro-app-xxx',
    'disable-memory-router': true, // 关闭虚拟路由
  })

  
createApp(App).mount('#child1')
