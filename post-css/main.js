import './assets/style/main.css'
import './src/styles/all.css'
import Vue from 'vue'
import App from './src/components/app.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
