import store from '../tools/store'

var isLoggedMixin = {
  methods: {
    checkIfLogged (username, password) {
      return new Promise((resolve, reject) => {
        if (username === 'test' && password === 'test') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }
		if (username === 'gestor' && password === 'gestor') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }
		if (username === 'coordenador' && password === 'coordenador') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }
		if (username === 'diretor' && password === 'diretor') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }
		if (username === 'técnico' && password === 'técnico') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }
		if (username === 'técnicoformação' && password === 'técnicoformação') {
          store.auth.default = false
          store.auth.logged = true
          resolve(true)
        }else {
          store.auth.logged = false
          resolve(false)
        }
      })
    }
  }
}

export default isLoggedMixin
