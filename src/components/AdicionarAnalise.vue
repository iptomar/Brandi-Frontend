<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Adicionar Análise</h1>
    <b-row class="panel panel-default">
      <b-container class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </b-container>
    </b-row>
    <b-button variant="primary" v-on:click="guardar">Guardar</b-button>
    <b-button variant="primary" @click="voltar">Voltar</b-button>
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
            required: false
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
          ,
          {
            label: "ID do Objeto:",
            model: "id_objeto",
            type: "input",
            inputType: "number",
            required: false,            
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
      this.$router.replace({ path: "/listaranalises" });
    },
    guardar() {
      axios
        .post(
          "/adicionaranalise",
          {},
          {
            headers: {
              authorization: this.token
            },
            params: {
              Descricao_Analise: this.model.descricao,
              //Data_Realizacao_Analise: this.model.data_analise,
              Locao_realizacao_Analise: this.model.local_analise,
              //Inicio_Analise: this.model.inicio_analise,
              //Fim_Analise: this.model.fim_analise,
              Distancia_Deslocacao: this.model.distancia_deslocacao,
              Outras_Despesas: this.model.outras_despesas,
              ID_Objecto: this.model.id_objeto
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.replace({ path: "/listaranalises" });
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
.bv-example-row {
  padding: 70px 0px;
}
.bv-example-row {
  padding: 70px 0px;
}
</style>
