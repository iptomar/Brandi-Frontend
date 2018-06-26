<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista dos Clientes</h1>
    <button type="button" class="btn" v-on:click=novo()>Novo Cliente</button>
    <hr >    
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Morada</th>
          <th scope="col">Contacto</th>
          <th scope="col">Email</th>
          <th scope="col">Número de Identificação Fiscal (NIF) </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente of clientes" v-bind:key="cliente.idCliente">
          <td>{{cliente.nome}}</td>
          <td>{{cliente.morada}}</td>
          <td>{{cliente.contacto}}</td>
          <td>{{cliente.email}}</td>
          <td>{{cliente.nif}}</td>
          <td><button type="button" class="btn btn-warning" v-on:click=editar(cliente.id)>Editar</button></td>
          <td><button type="button" class="btn btn-danger" v-on:click=apagar(cliente.id)>Arquivar</button></td>          
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
      token: store.token,
      auth: store.auth,
      clientes: [],
      errors: []
    };
  },
  created() {
    axios
      .post(
        "/listarclientes",
        {},
        {
          headers: {
            authorization: this.token
          }
        }
      )
      .then(response => {
        this.clientes = response.data.clientes;
      })
      .catch(function(error) {});
   
  },
  methods: {
    // editar utilizador
    editar(num) {
      this.$router.push({ path: "/editarCliente", query: { id: num } });
    },
    // apagar utilizador
    apagar(num) {
      this.$router.push({ path: "/EliminarCliente", query: { id: num } });
    },
    novo() {
      this.$router.push({ path: "/AdicionarCliente" });
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.listar {
  text-align: left;
  width: 400px;
}

td {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
  border-color: black;
}
th {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
  border-color: black;
  font-weight: bold;
}
</style>
