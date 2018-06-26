import Vue from 'vue'

export default new Vue({
  data: {
    sideMenu: {
      isOpen: false
    },
    auth: {
      logged: false,
      user: null,
      token: '',
      default: true
    }
  }
})
