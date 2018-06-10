<template>
  <b-container  v-if="auth.logged"  class="bv-example-row">
  <h1>Lista de Clientes</h1>
  <ul v-if="clientes && clientes.length">
    <li v-for="cliente of clientes" v-bind:key="cliente.idCliente">
      <table class="tg">
          <tr>
            <th class=""></th>
            <th class="">Nome</th>
            <th class="">NIF</th>
            <th class="">Morada</th>
            <th class="">Contacto</th>
            <th class="">E-mail</th>
          </tr>
          <tr>
            <td class="">{{cliente.nome}}</td>
            <td class="">{{cliente.nif}}</td>
            <td class="">{{cliente.morada}}</td>
            <td class="">{{cliente.contacto}}</td>
            <td class="">{{cliente.email}}</td>
          </tr>
      </table>
  </li>
</ul>

<ul v-if="errors && errors.length">
  <li v-for="error of errors" v-bind:key="error.idCliente">
    {{error.message}}
  </li>
</ul>
  </b-container>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import isLoggedMixin from '../mixins/logged'
import store from '../tools/store'
import axios from 'axios'

Vue.use(VueFormGenerator)

export default {
    data() {      
      return {      
        auth: store.auth,
        clientes: [],
        errors: []
     }
    },      
  created() {    
    var url = "/listarclientes"
    axios.get(url
    ).then(response => {
      this.clientes = response.data
      console.log(clientes);
    }).catch(e => {
      this.errors.push(e)
  })
  },
  methods: {
  }
}

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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.listar{
text-align: left;
width:400px;

}
</style>
