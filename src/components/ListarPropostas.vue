<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Propostas</h1>
    <ul v-if="propostas && propostas.length">    
      <li v-for="proposta of propostas" v-bind:key="proposta.idProposta">
        <p>
          {{proposta.idproposta}}: {{proposta.descricao}} - {{proposta.dataEnvio}} - {{proposta.aceitacao}}
          <b-button v-on:click=editar(proposta.idproposta)>Editar</b-button>
          <b-button v-on:click=apagar(proposta.idproposta)>Apagar</b-button>
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
      propostas: [],
      errors: []
    };
  },

  created() {
    var url = "/listarpropostas/";
    axios
      .post(url)
      .then(response => {
        this.propostas = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    editar(num) {
      this.$router.push({ path: "/editarproposta", query: { id: num } });
    },
    apagar(num) {
      this.$router.push({ path: "/eliminarproposta", query: { id: num } });
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
