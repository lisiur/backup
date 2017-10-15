import { createApp } from './app'

const { app }  = createApp()

router.onReady(() => {
  app.$mount('#app')
})
