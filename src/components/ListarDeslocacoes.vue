 <template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
    <h1>Lista Deslocações</h1>
    <ul v-if="deslocacao && deslocacao.length">
     <li v-for="deslocacao of deslocacao" v-bind:key="deslocacao.idDesloc">
        <table class="tg">
            <tr>
              <th class=""></th>
              <th class="">Cliente</th>
              <th class="">Local</th>
              <th class="">KM</th>
              <th class="">Data</th>
              <th class="">Início da  Análise</th>
              <th class="">Fim da Análise</th>  
            </tr>
            <tr>
              <td class="">{{deslocacao.idDesloc}}</td>
              <td class="">{{deslocacao.cliente}}</td>
              <td class="">{{deslocacao.localDesloc}}</td>
              <td class="">{{deslocacao.km}}</td>
              <td class="">{{deslocacao.dataDesloc}}</td>
              <td class="">{{deslocacao.inicAnalise}}</td>
              <td class="">{{deslocacao.fimAnalise}}</td>
           </tr>
        </table>
    </li>
  </ul>

 <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.idDesloc">
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
        deslocacao: [],
        errors: []
     }
    },
  created() { // informações das deslocações
    var url = "/deslocacoes"
    axios.get(url
    ).then(response => {
      this.deslocacao = response.data;
      console.log(this.deslocacao);
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

  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>




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

.tg  {border-collapse:collapse;border-spacing:0;}
td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;}


</style>
