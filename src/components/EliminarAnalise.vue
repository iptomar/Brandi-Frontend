<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
       <table style="width:100%">
          <tr>
            <th><h1>Quer mesmo arquivar a Análise Preliminar?</h1></th>
          </tr>
          <tr >
            <td>
			<b-button variant="primary" style="margin-left: 0%;" v-on:click=apagar()>Arquivar</b-button>
			<b-button variant="primary" style="margin-left: 6%;" v-on:click=cancelar()>Voltar</b-button>
			</td>         
          </tr>
        </table>
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
      token: store.token,
      auth: store.auth
    };
  },
  methods: {
    // apagar análise
    apagar() {
      axios
        .post(
          "/eliminaranalise",
          {},
          {
            headers: {
              authorization: this.token
            },
            params: {
              id: this.$route.query.id
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.replace("/Listaranalises");
    },

    cancelar() {
      this.$router.replace("/ListarAnalises");
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

h1 {
  margin: 80px 0 40px;
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

tr {
  height: 85px;
}

.btn-secondary {
  margin-bottom: 40px;
}
</style>
</style>