<template>
  <b-container  v-if="auth.logged"  class="bv-example-row">
    <h1>Lista de Eventos</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Data do Evento</th>
          <th scope="col">Tipo</th>
          <th scope="col">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evento of eventos" v-bind:key="evento.idEvento">
          <td>{{evento.data_evento}}</td>
          <td>{{evento.tipo}}</td>
          <td>{{evento.descricao}}</td>
          <td><button type="button" class="btn btn-warning">Editar</button></td>
          <td><button type="button" class="btn btn-danger">Arquivar</button></td>
        </tr>
      </tbody>
    </table>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.idEvento">
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
  components: {
    "vue-form-generator": VueFormGenerator.component
  },

  data() {
    return {
      auth: store.auth,
      eventos: [],
      errors: []
    };
  },
  created() {
    var url = "/listareventos/";
    axios
      .get(url)
      .then(response => {
        this.eventos = response.data;
        console.log(eventos);
      })
      .catch(e => {
        this.errors.push(e);
      });
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
