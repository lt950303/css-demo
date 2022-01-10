import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Generic 层， 抹平浏览器基础样式差距
import 'normalize.css/normalize.css'

import './style/index.less'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
