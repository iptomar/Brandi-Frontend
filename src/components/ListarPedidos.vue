<template>
  <b-container v-if="auth.logged" class="bv-example-row">
  <h1>Lista de Pedidos</h1>
    <ul v-if="pedidos && pedidos.length">    
      <li v-for="pedido of pedidos" v-bind:key="pedido.idPedido">
      <p>
        {{pedido.idPedido}}: {{pedido.titulo}} - {{pedido.foto}} - {{pedido.data}} - {{pedido.cliente}} 
        <b-button v-on:click=editar(pedido.idPedido)>Editar</b-button>
        <b-button v-on:click=apagar(pedido.idPedido)>Apagar</b-button>
      </p>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{error.message}}
      </li>
    </ul>
  </b-container>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import isLoggedMixin from "../mixins/logged";
import store from "../tools/store";
import axios from "axios";

Vue.use(VueFormGenerator);

export default {
  data() {
    return {
      auth: store.auth,
      pedidos: [],
      errors: []
    };
  },

  created() {
    var url = "/listarpedidos/";
    axios
      .post(url)
      .then(response => {
        this.pedidos = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    editar(num) {
      this.$router.push({ path: "/editarpedido", query: { id: num } });
    },
    apagar(num) {
      this.$router.push({ path: "/eliminarpedido", query: { id: num } });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
