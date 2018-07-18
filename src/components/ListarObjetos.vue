<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Objetos</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Tipologia</th>
          <th scope="col">Localização</th>
          <th scope="col">Designação</th>
          <th scope="col">Proprietário</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="objeto of objetos" v-bind:key="objeto.idObjeto">
          <td>{{objeto.tipologia}}</td>
          <td>{{objeto.localizacao}}</td>
          <td>{{objeto.designacao}}</td>
          <td>{{objeto.idProprietario}}</td>
          <td><button type="button" class="btn btn-warning" v-on:click=editar(objeto.idObjeto)>Editar</button></td>
          <td><button type="button" class="btn btn-danger" v-on:click=arquivar(objeto.idObjeto)>Arquivar</button></td>
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
      objetos: [],
      errors: []
    };
  },

  created() {
    var url = "/listarobjetos/";
    axios
      .post(url)
      .then(response => {
        this.objetos = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    // editar objeto

    editar(num) {
      this.$router.push({ path: "/editarobjeto", query: { id: num } });
    },
    apagar(num) {
      this.$router.push({ path: "/eliminarobjeto", query: { id: num } });
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
.bv-example-row{
  padding: 70px  0px
}
</style>
