<template>
    <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Propostas</h1>
     <hr>
     <button type="button" class="btn"  v-on:click=novo()>Nova proposta</button>
    <hr >    
    <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Descrição</th>
                <th scope="col">Data Envio</th>
                <th scope="col">Aceitação Proposta</th>
                <th scope="col">Justificação da Recusa</th>
                <th scope="col">Pedido</th>
                <th scope="col">Coordenador</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="proposta of propostas" v-bind:key="proposta.idProposta">
                <td>{{proposta.Descricao}}</td>
                <td>{{proposta.Data_Envio_Proposta}}</td>
                <td>{{proposta.Aceitação_Proposta}}</td>
                <td>{{proposta.Justificacao_Recusa}}</td>
                <td>{{proposta.ID_Pedido}}</td>
                <td>{{proposta.ID_Coordenador}}</td>
                <td><button type="button" class="btn btn-warning" v-on:click=editar(proposta.id)>Editar</button></td>
                <td><button type="button" class="btn btn-danger" v-on:click=arquivar(proposta.id)>Arquivar</button></td>
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
      token: store.token,
      sideMenu: store.sideMenu,
      propostas: [],
      errors: []
    };
  },

  created() {
    this.sideMenu.isOpen = false;
    axios
      .post(
        "/listarPropostas",
        {},
        {
          headers: {
            authorization: this.token
          }
        }
      )
      .then(response => {
        this.propostas = response.data.propostas;
      })
      .catch(function(error) {});
  },
  methods: {
    editar(num) {
      this.$router.push({ path: "/editarproposta", query: { id: num } });
    },
    arquivar(num) {
      this.$router.push({ path: "/eliminarproposta", query: { id: num } });
    },
    novo() {
      this.$router.push({ path: "/adicionarproposta", query: {} });
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
