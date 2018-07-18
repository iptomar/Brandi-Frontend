import store from '../tools/store'

var isLoggedMixin = {
  methods: {
    checkIfLogged(token) {
      return new Promise((resolve, reject) => {
        if (token === undefined) {
          store.auth.logged = false
          resolve(false)
        } else {
          store.token = token
          store.auth.default = false
          store.auth.logged = true
          resolve(true)

        }
      })
    }
  }
}

export default isLoggedMixin
