import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import TecnicalForm from '@/components/TecnicalForm'
import EliminarCliente from '@/components/EliminarCliente'
import EditarCliente from '@/components/EditarCliente'
import AddClient from '@/components/AddClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/editarCliente',
      name: 'EditarCliente',
      component: EditarCliente
    },
    {
      path: '/eliminarcliente',
      name: 'EliminarCliente',
      component: EliminarCliente
    },
    {
      path: '/addClient',
      name: 'AddClient',
      component: AddClient
    },
    {
      path: '/form',
      name: 'TecnicalForm',
      component: TecnicalForm
    }
  ]
})
