
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui' 
import locale from 'element-ui/lib/locale/lang/zh-CN' 
import './theme/index.css' //自定义主题颜色
import '@/styles/index.scss' // 全局 css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
import '../mock' // simulation data
// if (process.env.NODE_ENV === 'development') {
//   require('../mock') // simulation data
// }
  
Vue.use(ElementUI, { locale , size: 'mini', zIndex: 3000  })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
