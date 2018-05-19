<template>
  <b-container class="bv-example-row">
    <h1>Adicionar Cliente</h1>
    <b-row class="text-center">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </b-row>
    <b-button v-on:click="guardar">Guardar</b-button>
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
      error: [],

      model: {
        id: "",
        nome: "",
        nif: "",
        morada: "",
        telemovel: "",
        email: "",
        status: true
      },

      schema: {
        fields: [
          {
            label: "Nome Completo:",
            model: "nome",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Insira o nome completo do cliente"
          },
          {
            label: "NIF:",
            model: "nif",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Insira o Número de Identificação Fiscal do cliente"
          },
          {
            label: "Morada:",
            model: "morada",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Insira a morada do cliente"
          },
          {
            label: "Telemóvel:",
            model: "telemovel",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Insira o número de telemóvel do cliente"
          },
          {
            label: "E-mail:",
            model: "email",
            type: "input",
            inputType: "email",
            featured: true,
            required: true,
            placeholder: "Insira do endereço de e-mail do cliente"
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
    
    // adicionar um cliente
    guardar() {
      axios.get("/addclient", {
          params: {
            nome: this.model.nome,
            nif: this.model.nif,
            morada: this.model.morada,
            telemovel: this.model.telemovel,
            email: this.model.email
          }})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
};
</script>

<style scoped>

h1 {
  font-weight: bold;
  text-align: left;
}

</style>
