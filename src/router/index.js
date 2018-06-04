import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import TecnicalForm from '@/components/TecnicalForm'
import EliminarCliente from '@/components/EliminarCliente'
import EditarCliente from '@/components/EditarCliente'
import AdicionarCliente from '@/components/AdicionarCliente'
import AdicionarObjecto from '@/components/AdicionarObjecto'
import EliminarObjeto from '@/components/EliminarObjeto'
import EditarObjeto from '@/components/EditarObjeto'
import ListarPedidos from '@/components/ListarPedidos'
import ListarDeslocacoes from '@/components/ListarDeslocacoes'
import ListarClientes from '@/components/ListarClientes'
import listarEventos from '@/components/listarEventos'
import listarObjetos from '@/componentes/listarObjetos'

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
      path: '/adicionarcliente',
      name: 'AdicionarCliente',
      component: AdicionarCliente
    },
    {
      path: '/form',
      name: 'TecnicalForm',
      component: TecnicalForm
    },
    {
      path: '/adicionarobjectos',
      name: 'AdicionarObjecto',
      component: AdicionarObjecto
    },
    {
      path: '/eliminarobjeto',
      name: 'EliminarObjeto',
      component: EliminarObjeto
    },
	{
      path: '/editarobjeto',
      name: 'EditarObjeto',
      component: EditarObjeto
    },
    {
      path: '/listarpedidos',
      name: 'ListarPedidos',
      component: ListarPedidos
    },
    {
      path: '/listardeslocacoes',
      name: 'ListarDeslocacoes',
      component: ListarDeslocacoes
    },
    {
      path: '/listarclientes',
      name: 'ListarClientes',
      component: ListarClientes
    },
    {
      path: '/eventos',
      name: 'listarEventos',
      component: listarEventos
    },
	path: '/listarobjetos',
	name: 'ListarObjetos',
	component: listarObjetos
  ]
})
