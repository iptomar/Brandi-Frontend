import store from '../tools/store'

var isLoggedMixin = {
  methods: {
    checkIfLogged (username, password) {
      return new Promise((resolve, reject) => {
        if (username === 'test' && password === 'test') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        } else {
          store.auth.logged = false
          resolve(false)
        }
      })
    }
  }
}

export default isLoggedMixin
