<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Objeto</h1>
    <b-row class="panel panel-default">
      <b-container class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </b-container>
    </b-row>
    <b-button variant="primary" v-on:click="guardar">Guardar</b-button>
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
        designacao: "",
        tipologia: "",
        localizacao: "",
        status: true
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Designação do Objeto",
            model: "designacao",
            required: true,
            placeholder: "Ex.: Cadeira do Século XIX"
          },
          {
            label: "Tipologia",
            model: "tipologia",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Tipologia do Objecto"
          },
          {
            label: "Localização:",
            model: "localizacao",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Localização do Objecto"
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
    guardar() {
      axios
        .post(
          "/adicionar",
          {},
          {
            params: {
              designacao: this.model.designacao,
              tipologia: this.model.tipologia,
              localizacao: this.model.localizacao
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {});
      this.$router.replace({ path: "listarobjecto" });
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
