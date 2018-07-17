<template>
  <b-nav vertical fill pills>
    <vue-tree-navigation :items="items" class="left-menu text-left mt-4 mr-6" text-variant="white" />
  </b-nav>
</template>

<script>
import Vue from "vue";
import VueTreeNavigation from "vue-tree-navigation";
Vue.use(VueTreeNavigation);

export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          route: "home"
        },
        {
          name: "Gestão de Oportunidades",
          children: [
            { name: "Clientes", route: "listarclientes" },
            { name: "Objetos", route: "listarobjetos" },
            { name: "Pedidos", route: "listarpedidos" },
            { name: "Análises", route: "listaranalises" },
            { name: "Propostas", route: "listarpropostas" },
            { name: "Eventos", route: "listareventos" }
          ]
        },
        {
          name: "Formulário",
          route: "form"
        }
      ]
    };
  },
  methods: {  
  }
};
</script>
<style>
.side-menu a {
  color: #fff;
}
</style>
