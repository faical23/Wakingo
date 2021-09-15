import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/sass/style.scss'
import excel from 'vue-excel-export'
import jspdf from'jspdf'
import pdf from 'vue-pdf'

Vue.use(excel)
Vue.use(jspdf)
Vue.use(pdf)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
