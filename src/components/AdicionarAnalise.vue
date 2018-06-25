<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Análise</h1>
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
        data_analise: "",
        local_analise: "",
        inicio_analise: "",
        fim_analise: "",
        distancia_deslocacao: "",
        outras_despesas: "",
        id_objeto: ""
      },

      schema: {
        fields: [
          {
            label: "Descrição da Análise:",
            model: "descricao",
            type: "textArea",
            hint: "Máximo 500 caracteres.",
            max: 500,
            rows: 4,
            required: true,
            placeholder: "Insira a descrição da análise"
          },
          {
            label: "Data de Realização da Análise:",
            model: "data_analise",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "Local da Análise:",
            model: "local_analise",
            type: "input",
            inputType: "text",
            required: true
          },
          {
            label: "Hora de Início da Análise:",
            model: "inicio_analise",
            type: "input",
            inputType: "time",
            required: true
          },
          {
            label: "Hora de Fim da Análise:",
            model: "fim_analise",
            type: "input",
            inputType: "time",
            required: true
          },
          {
            label: "Distância da Deslocação",
            model: "distancia_deslocacao",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira a distância em Km"
          },
          {
            label: "Outras Despesas:",
            model: "outras_despesas",
            type: "input",
            inputType: "text",
            required: false,
            placeholder: "Insira outras despesas, caso aplicável"
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
          "/adicionaranalise",
          {},
          {
            params: {
              descricao: this.model.descricao,
              data_analise: this.model.data_analise,
              local_analise: this.model.local_analise,
              inicio_analise: this.model.inicio_analise,
              fim_analise: this.model.fim_analise,
              distancia_deslocacao: this.model.distancia_deslocacao,
              outras_despesas: this.model.outras_despesas,
              id_objeto: this.$route.query.id//? verificar
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
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
