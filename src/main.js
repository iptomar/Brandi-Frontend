// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import {VTable,VPagination} from 'vue-easytable'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-easytable/libs/themes-base/index.css'

Vue.config.productionTip = false

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.use(BootstrapVue)

window.app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
