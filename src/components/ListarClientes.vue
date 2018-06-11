<template>
   <b-container class="bv-example-row">
        <b-row class="text-center">
            <div v-for="(value) in clientes" class="listar">
              Nome : {{value.nome}} 
              <br/>
              Morada : {{value.morada}}
              <br/>
              Telefone : {{value.contato}}
              <br/>
              Email : {{value.email}}
              <br/>
              NIF : {{value.NIF}}
              <br/>
            </div>
        </b-row>
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
</style>
