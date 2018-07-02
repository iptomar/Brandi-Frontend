<template>
  <b-nav vertical fill pills>
    <vue-tree-navigation :items="items" class="left-menu text-left mt-4 mr-6" text-variant="white"/>
  </b-nav>
</template>

<script>
    import Vue from 'vue'
    import VueTreeNavigation from 'vue-tree-navigation'
    import Scrollspy from 'vue2-scrollspy';

    Vue.use(VueTreeNavigation);
    Vue.use(Scrollspy);

      export default {

        data() {
          return {
            items: [
              { name: 'Home', route: 'home' },
              { name: 'Gestão de Oportunidades', children: [
                { name: 'Clientes', route: 'listarclientes'},
                { name: 'Objetos', route: 'listarobjetos'},
                { name: 'Pedidos', route: 'listarpedidos'},
                { name: 'Análises', route: 'listaranalises'},
                { name: 'Propostas', route: 'listarpropostas'},
                { name: 'Eventos', route: 'listareventos'},
              ]},
              { name: 'Formulário', route: 'form', scrollspy:"v-scroll-spy-active v-scroll-spy-link", children: [
                  { name: 'Pagina 1', element: 'pg1',scrollspy:"v-scroll-spy-active v-scroll-spy-link" },
                  { name: 'Pagina 2', element: 'pg2' },
                  { name: 'Pagina 3', element: 'pg3' },
                  { name: 'Pagina 4', element: 'pg4' },
                  { name: 'Pagina 5', element: 'pg5' },
                  { name: 'Pagina 6', element: 'pg6' },
                  { name: 'Pagina 7', element: 'pg7' },
                  { name: 'Pagina 8', element: 'pg8' },
                  { name: 'Pagina 9', element: 'pg9' },
                  { name: 'Pagina 10', element: 'pg10' }
              ]},
            ],
          };
        },
      };
</script>
<style>

.side-menu a {
    color: #fff;
}

</style>
