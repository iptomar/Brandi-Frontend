<template>
    <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Lista de Objetos</h1>
    <ul v-if="objetos && objetos.length">    
     <li v-for="objeto of objetos" v-bind:key="objeto.idObjeto">
        <p>
          {{objeto.idObjeto}}: {{objeto.tipologia}} - {{objeto.localizacao}} - {{objeto.designacao}} - {{objeto.idProprietario}} 
          <b-button v-on:click=editar(objeto.idObjeto)>Editar</b-button>
          <b-button v-on:click=apagar(objeto.idObjeto)>Apagar</b-button>
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
      objetos: [],
      errors: []
    };
  },

  created() {
    var url = "/listarobjetos";
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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