<template>
   <b-container class="bv-example-row">
        <b-row class="text-center">
            <div v-for="(value) in eventos" class="listar">
              Evento : {{value.evento}} 
              <br/>
              Descrição : {{value.descricao}}
              <br/>
              Data de criação : {{value.time}}
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
    var url = "/eventos/"
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
