<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Cliente</h1>
    <b-row class="panel panel-default">
      <b-container class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </b-container>
    </b-row>
    <b-button variant="primary" v-on:click="guardar">Guardar</b-button>
    <b-button variant="primary" v-on:click="voltar">Voltar</b-button>
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
  components: {
    "vue-form-generator": VueFormGenerator.component
  },

  data() {
    return {
      auth: store.auth,
      token: store.token,
      error: [],
      model: {
        idCliente: "",
        nome: "",
        nif: "",
        morada: "",
        contacto: "",
        email: "",
        status: true
      },

      schema: {
        fields: [
          {
            label: "Nome Completo",
            model: "nome",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Ex.: Joaquim Maria Leitão"
          },
          {
            label: "NIF",
            model: "nif",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Ex.: 123456789"
          },
          {
            label: "Morada",
            model: "morada",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Ex.: Rua da Paz"
          },
          {
            label: "Contacto Telefónico",
            model: "contacto",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Ex.: 910000000"
          },
          {
            label: "E-mail",
            model: "email",
            type: "input",
            inputType: "email",
            required: true,
            placeholder: "Ex.: jleitao@gmail.com"
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },

  methods: {
    voltar() {
      this.$router.replace({ path: "/listarclientes" });
    },
    guardar() {
      axios
        .post(
          "/adicionarcliente",
          {},
          {
            headers: {
              authorization: this.token
            },
            params: {
              nome: this.model.nome,
              nif: this.model.nif,
              morada: this.model.morada,
              contacto: this.model.contacto,
              email: this.model.email
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.replace({ path: "/listarclientes" });
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}

.btn-primary {
  margin-bottom: 20px;
}
</style>
