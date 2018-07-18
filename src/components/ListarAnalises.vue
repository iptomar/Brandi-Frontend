<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Análises Preliminares</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Descrição da Análise</th>
          <th scope="col">Data da Análise</th>
          <th scope="col">Local</th>
          <th scope="col">Deslocação (Km)</th>
          <th scope="col">Início da Análise</th>
          <th scope="col">Fim da Análise</th>
          <th scope="col">Outras Despesas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="analise of analises" v-bind:key="analise.idAnalise">
          <td>{{analise.descAnalise}}</td>
          <td>{{analise.dataAnalise}}</td>
          <td>{{analise.localAnalise}}</td>
          <td>{{analise.km}}</td>
          <td>{{analise.inicAnalise}}</td>
          <td>{{analise.fimAnalise}}</td>
          <td>{{analise.outrasDespesas}}</td>
          <td><button type="button" class="btn btn-warning">Editar</button></td>
          <td><button type="button" class="btn btn-danger">Arquivar</button></td>
        </tr>
      </tbody>
    </table>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.idAnalise">
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
      analises: [],
      errors: []
    };
  },
  created() {
    var url = "/listaranalises/";
    axios
      .get(url)
      .then(response => {
        this.analises = response.data;
        console.log(this.analises);
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
.bv-example-row{
  padding: 70px  0px
}
</style>
