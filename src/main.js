import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
// UI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router/routers'
import store from './store'
import '@/icons' // icon
import './router' // 组装动态路由

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
