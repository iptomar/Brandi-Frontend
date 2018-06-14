<template>
   <b-container class="bv-example-row">
    <h1>Lista dos Clientes</h1>
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Morada</th>
                <th scope="col">Contacto</th>
                <th scope="col">Email</th>
                <th scope="col">Número de Identificação Fiscal (NIF) </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value) in clientes" >
                <td>{{value.id}}</td>
                <td>{{value.nome}}</td>
                <td>{{value.morada}}</td>
                <td>{{value.contato}}</td>
                <td>{{value.email}}</td>
                <td>{{value.NIF}}</td>
                <td><button type="button" class="btn btn-warning">Editar</button></td>
                <td><button type="button" class="btn btn-danger">Arquivar</button></td>
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
    var url = "/clientes/"
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

td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;}

</style>
