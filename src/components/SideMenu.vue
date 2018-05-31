<template>
  <b-nav vertical fill pills>
    <vue-tree-navigation :items="items" class="left-menu text-left mt-4 mr-5" text-variant="white" />
  </b-nav>
</template>

<script>
    import Vue from 'vue'
    import VueTreeNavigation from 'vue-tree-navigation'
    Vue.use(VueTreeNavigation)

      export default {

        data() {
          return {
            items: [
              { name: 'Home', route: 'home' },
              { name: 'Formulário', route: 'form', children: [
                  { name: 'Pagina 1', element: 'pg1' },
                  { name: 'Pagina 2', element: 'pg2', children: [
                      { name: 'Pagina 1', element: 'pg1' }
                  ]},
              ]},
            ],
          };
        },
      };
</script>
