import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import TecnicalForm from '@/components/TecnicalForm'

// -- LISTAGENS --
import ListarClientes from '@/components/ListarClientes'
import ListarPedidos from '@/components/ListarPedidos'
import ListarAnalises from '@/components/ListarAnalises'
import ListarEventos from '@/components/ListarEventos'
// import ListarObjetos from '@/components/ListarObjetos'
// import ListarPropostas from '@/components/ListarPropostas'

// -- ADIÇÕES --
import AdicionarCliente from '@/components/AdicionarCliente'
import AdicionarObjeto from '@/components/AdicionarObjeto'
// import AdicionarPedido from '@/components/AdicionarPedido'
// import AdicionarAnalise from '@/components/AdicionarAnalise'
import AdicionarProposta from '@/components/AdicionarProposta'
// import AdicionarEvento from '@/components/AdicionarEvento'

// -- EDIÇÕES ---
import EditarCliente from '@/components/EditarCliente'
import EditarObjeto from '@/components/EditarObjeto'
import EditarAnalise from '@/components/EditarAnalise'
import EditarPedido from '@/components/EditarPedido'
// import EditarProposta from '@/components/EditarProposta'
import EditarEvento from '@/components/EditarProposta'

// -- ELIMINAÇÕES --
import EliminarCliente from '@/components/EliminarCliente'
import EliminarObjeto from '@/components/EliminarObjeto'
import EliminarAnalise from '@/components/EliminarAnalise'
// import EliminarPedido from '@/components/EliminarPedido'
// import EliminarProposta from '@/components/EliminarProposta'

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
      path: '/form',
      name: 'TecnicalForm',
      component: TecnicalForm
    },
    {
      path: '/listarclientes',
      name: 'ListarClientes',
      component: ListarClientes
    },
    {
      path: '/adicionarcliente',
      name: 'AdicionarCliente',
      component: AdicionarCliente
    },
    {
      path: '/editarcliente',
      name: 'EditarCliente',
      component: EditarCliente
    },
    {
      path: '/eliminarcliente',
      name: 'EliminarCliente',
      component: EliminarCliente
    },
    {
      path: '/adicionarobjeto',
      name: 'AdicionarObjeto',
      component: AdicionarObjeto
    },
	{
      path: '/adicionarproposta',
      name: 'AdicionarProposta',
      component: AdicionarProposta
    },
    {
      path: '/editarobjeto',
      name: 'EditarObjeto',
      component: EditarObjeto
    },
    {
      path: '/eliminarobjeto',
      name: 'EliminarObjeto',
      component: EliminarObjeto
    },
    {
      path: '/listarpedidos',
      name: 'ListarPedidos',
      component: ListarPedidos
    },
    {
      path: '/editarpedido',
      name: 'EditarPedido',
      component: EditarPedido
    },
    {
      path: '/listaranalises',
      name: 'ListarAnalises',
      component: ListarAnalises
    },
    {
      path: '/editaranalise',
      name: 'EditarAnalise',
      component: EditarAnalise
    },
    {
      path: '/eliminaranalise',
      name: 'EliminarAnalise',
      component: EliminarAnalise
    },
    {
      path: '/listareventos',
      name: 'ListarEventos',
      component: ListarEventos
    },
    {
      path: '/EditarEventos',
      name: 'EditarEventos',
      component: EditarEventos
    }
	
  ]
})
