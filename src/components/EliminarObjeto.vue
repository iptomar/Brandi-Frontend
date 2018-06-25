<template>
    <b-container v-if="auth.logged" class="bv-example-row">
        <table style="width:100%">
          <tr>
            <th><h1>Quer mesmo arquivar este Objeto?</h1></th>
          </tr>
          <tr >
            <td>
			<b-button style="margin-left: 0%;"  v-on:click=apagar()>Arquivar</b-button>
			<b-button style="margin-left: 6%;" v-on:click=cancelar()>Voltar</b-button>
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
      auth: store.auth
    };
  },
  methods: {
    // apagar objeto
    apagar() {
      axios
        .post(
          "/apagar",
          {},
          {
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
      this.$router.replace("/listarobjetos");
    },
	
	cancelar() {
		this.$router.replace("/listarobjetos");
	}
	
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

h1{
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
tr{
  height: 85px;
}

a {
  color: #42b983;
}

.btn-secondary {
    margin-bottom: 40px;
}
</style>
