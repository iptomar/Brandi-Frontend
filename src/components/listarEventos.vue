<template>
  <b-container  v-if="auth.logged"  class="bv-example-row">
  <h1>Lista de Eventos</h1>
  <ul v-if="eventos && eventos.length">
    <li v-for="evento of eventos" v-bind:key="evento.idEvento">
      <table class="tg">
          <tr>
            <th class=""></th>
            <th class="">Data do Evento</th> 
            <th class="">Tipo</th>
            <th class="">Descrição</th>
          </tr>
          <tr>
            <td class="">{{evento.data_evento}}</td>
            <td class="">{{evento.tipo}}</td>
            <td class="">{{evento.descricao}}</td>
          </tr>
      </table>
  </li>
</ul>

<ul v-if="errors && errors.length">
  <li v-for="error of errors" v-bind:key="error.idEvento">
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
  components: {
    'vue-form-generator': VueFormGenerator.component
  },

  data() {
      return {
        auth: store.auth,
        eventos: [],
        errors: []
      }
    },      
  created() {    
    var url = "/listareventos"
    axios.get(url
    ).then(response => {
      this.eventos = response.data
      console.log(eventos);
    }).catch(e => {
      this.errors.push(e)
  })
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
