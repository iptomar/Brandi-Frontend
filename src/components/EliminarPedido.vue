<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1>Quer Mesmo Apagar o Pedido?</h1>
        <hr >
        <b-button variant="primary" v-on:click=apagar()>Sim</b-button>
        <b-button variant="primary" v-on:click=cancelar()>Não</b-button>
        <hr >
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
    // apagar pedido
    apagar() {
      axios
        .post(
          "/EliminarPedido",
          {},
          {headers: {
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
      this.$router.replace("/ListarPedidos");
    },
    
    cancelar() {
      this.$router.replace("/ListarPedidos");
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

a {
  color: #42b983;
}

.btn-secondary {
    margin-bottom: 40px;
}
</style>