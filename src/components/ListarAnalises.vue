 <template>
    <b-container   class="bv-example-row">
    <h1>Lista Deslocações</h1>
    <table class="table table-hover table-dark">
        <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Descrição da Análise</th>
              <th scope="col">Data da Análise</th>
              <th scope="col">Local</th>
              <th scope="col">Deslocações (Km)</th>
              <th scope="col">Início da Análise</th>
              <th scope="col">Fim da Análise</th>
              <th scope="col">Outras Despesas</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="deslocacao of deslocacao" v-bind:key="deslocacao.idAnalise">
              <td>{{deslocacao.idAnalise}}</td>
              <td>{{deslocacao.descAnalise}}</td>
              <td>{{deslocacao.dataAnalise}}</td>
              <td>{{deslocacao.localAnalise}}</td>
              <td>{{deslocacao.km}}</td>
              <td>{{deslocacao.inicAnalise}}</td>
              <td>{{deslocacao.fimAnalise}}</td>
              <td>{{deslocacao.outrasDespesas}}</td>
              <td><button type="button" class="btn btn-warning">Editar</button></td>
              <td><button type="button" class="btn btn-danger">Arquivar</button></td>
            </tr>
        </tbody>
    </table>
 <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.idAnalise">
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

td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;}


</style>
