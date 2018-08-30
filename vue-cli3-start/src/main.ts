import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import logger from '@/utils/logger'

Vue.config.productionTip = false
Vue.prototype.$logger = logger

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
