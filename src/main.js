import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from  "element-ui"

//后期根据需要的组件再引进。
Vue.use(elementui);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
