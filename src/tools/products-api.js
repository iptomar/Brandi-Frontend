import axios from 'axios'
import store from '../tools/store'

export {
  getProduct
}

function getProduct (pid) {
  var options = {
    headers: { Authorization: 'Basic ' + store.auth.keyo }
  }

  return axios.get('https://127.0.0.1/blabla/' + pid, options).then(response => response.data)
}
