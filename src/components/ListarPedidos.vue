<template>
    <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Pedidos</h1>
      <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cliente</th>
                <th scope="col">Data</th>
                <th scope="col">Fotografia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pedido of pedidos" v-bind:key="pedido.idPedido">
                <td>{{pedido.titulo}}</td>
                <td>{{pedido.cliente}}</td>
                <td>{{pedido.data}}</td>
                <td>{{pedido.foto}}</td>
                <td><button type="button" class="btn btn-warning" v-on:click=editar(pedido.idPedido)>Editar</button></td>
                <td><button type="button" class="btn btn-danger" v-on:click=arquivar(pedido.idPedido)>Arquivar</button></td>
            </tr>
            </tbody>
        </table>
 
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

td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;}

</style>
