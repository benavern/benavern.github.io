import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Icon from './components/Icons/Icon'

Vue.component('icon', Icon)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
