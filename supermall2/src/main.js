// import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import FastClick from 'fastclick'

import toast from 'components/common/toast'

Vue.config.productionTip = false
// createApp.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)

FastClick.attach(document.body)
// createApp(App).use(router).mount('#app')
new Vue ({
  render: h => h(App),
  router,
  store
}).$mount('#app')