import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/sass/style.scss'
import excel from 'vue-excel-export'
// import jspdf from'jspdf'
import pdf from 'vue-pdf'
import print from "vue-html-to-paper"
import Vuex from 'vuex'
import html2canvas from 'html2canvas'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


Vue.use(Vuex)

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css"
  ]
};

Vue.use(VueAxios, axios)
Vue.use(html2canvas)
Vue.use(print ,options)
Vue.use(excel)
// Vue.use(jspdf)
Vue.use(pdf)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
