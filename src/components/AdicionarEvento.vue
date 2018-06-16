<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Evento</h1>
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
        descricao: "",
        data_evento: "",
        tipo: "",
        status: true
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Tipo de Evento",
            model: "tipo",
            required: true,
            placeholder: "Ex.: Receção do documento XPTO do Cliente"
          },
          {
            label: "Descrição do Evento",
            model: "descricao",
            type: "textArea",
            hint: "Máx.: 200 caracteres",
            max: 200,
            rows: 4,
            required: true,
            placeholder: "Ex.: O documento XPTO contém informações acerca..."
          },
          {
            label: "Data do Evento",
            model: "data_evento",
            type: "input",
            inputType: "date",
            required: true
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
          "/adicionarEvento",
          {},
          {
            params: {
              descricao: this.model.descricao,
              data_evento: this.model.data_evento,
              tipo: this.model.tipo
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {});
      this.$router.replace({ path: "listareventos" });
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
