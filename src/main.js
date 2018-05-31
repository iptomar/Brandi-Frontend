// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

import SideMenu from '@/components/SideMenu'
Vue.component('app-sidemenu', SideMenu);

Vue.config.productionTip = false

Vue.use(BootstrapVue)

window.app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
