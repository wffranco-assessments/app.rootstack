import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components'

require('bootstrap/scss/bootstrap.scss')
require('jquery/dist/jquery.slim')
require('bootstrap')

for (const name in components) {
  Vue.component(name, components[name])
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
