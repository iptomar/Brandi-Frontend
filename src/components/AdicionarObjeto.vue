<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Adicionar Objeto:</h1>
        <b-row  class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
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
            label: "Designação:",
            model: "designacao",
            required: true,
            placeholder: "Designação do Objecto"
          },
          {
            label: "Tipologia:",
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
    // adicionar objecto
    guardar() {
      axios
        .post(
          "/adicionar",
          {},
          {
            params: {
              designacao: this.model.designacao,
              tipologia: this.model.tipologia,
              localizacao: this.model.localizacao,
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
</style>
