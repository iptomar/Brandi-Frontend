<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Objetos</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Proprietário</th>
          <th scope="col">Pedido</th>
          <th scope="col">Designação</th>
          <th scope="col">Processo LCRM</th>
          <th scope="col">Processo CEARC</th>
          <th scope="col">Coordenação</th>
          <th scope="col">Data de Abertura do Processo</th>
          <th scope="col">Data de Entrada LCRM</th>
          <th scope="col">Data de Entrada CEARC</th>         
        </tr>
      </thead>
      <tbody>
        <tr v-for="objeto of objetos" v-bind:key="objeto.idObjeto">
          <td>{{objeto.ID_Proprietario}}</td>
          <td>{{objeto.ID_Pedido}}</td>
          <td>{{objeto.Designacao}}</td>
          <td>{{objeto.ProcessoLCRM}}</td>
          <td>{{objeto.ProcessoCEARC}}</td>
          <td>{{objeto.Coordenacao}}</td>
          <td>{{objeto.Data_Abertura_Processo}}</td>
          <td>{{objeto.Data_Entrada_LCRM}}</td>
          <td>{{objeto.Data_Entrada_CEARC}}</td>
          
          <td><button type="button" class="btn btn-warning" v-on:click=editar(objeto.id)>Editar</button></td>
          <td><button type="button" class="btn btn-danger" v-on:click=arquivar(objeto.id)>Arquivar</button></td>
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
      sideMenu: store.sideMenu,
      auth: store.auth,
      objetos: [],
      errors: []
    };
  },

  created() {
    this.sideMenu.isOpen = !this.sideMenu.isOpen;
    axios
      .post(
        "/listarobjetos",
        {},
        {
          headers: {
            authorization: this.token
          }
        }
      )
      .then(response => {
        this.objetos = response.data.objetos;
      })
      .catch(function(error) {});
  },
  methods: {}
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
.bv-example-row {
  padding: 70px 0px;
}
</style>
