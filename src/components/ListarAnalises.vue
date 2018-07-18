<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Análises Preliminares</h1>
    <hr>
    <button type="button" class="btn" v-on:click=novo()>Nova Analise</button>
    <hr>
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
          <th scope="col">Objeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="analise of analises" v-bind:key="analise.idAnalise">
          <td>{{analise.Descricao_Analise}}</td>
          <td>{{analise.Data_Realizacao_Analise}}</td>
          <td>{{analise.Locao_realizacao_Analise}}</td>
          <td>{{analise.Distancia_Deslocacao}}</td>
          <td>{{analise.Inicio_Analise}}</td>
          <td>{{analise.Fim_Analise}}</td>
          <td>{{analise.Outras_Despesas}}</td>
          <td>{{analise.ID_Objecto}}</td>
          <td><button type="button" class="btn btn-warning" v-on:click=editar(analise.id)>Editar</button></td>
          <td><button type="button" class="btn btn-danger" v-on:click=apagar(analise.id)>Arquivar</button></td>      
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
      token: store.token,
      sideMenu: store.sideMenu,
      auth: store.auth,
      analises: [],
      errors: []
    };
  },
  created() {
    this.sideMenu.isOpen = !this.sideMenu.isOpen;
    axios
      .post(
        "/listar_analises_preliminares",
        {},
        {
          headers: {
            authorization: this.token
          }
        }
      )
      .then(response => {
        this.analises = response.data.analises_preliminares;
      })
      .catch(function(error) {});
  },
  methods: {
    // editar analise
    editar(num) {
      this.$router.push({ path: "/Editar_analises_preliminares", query: { id: num } });
    },
    // apagar analise
    apagar(num) {
      this.$router.push({ path: "/Eliminar_analises_preliminares", query: { id: num } });
    },
    // adicionar analise
    novo() {
      this.$router.push({ path: "/Adicionar_analises_preliminares" });
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
