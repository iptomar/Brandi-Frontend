<template>
  <b-container class="bv-example-row">
    <h1>Editar Proposta</h1>
    <b-row class="panel panel-default">
      <b-container class="panel-body">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </b-container>
    </b-row>
    <b-button variant="primary" v-on:click="guardarProposta">Guardar</b-button>
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
      token: store.token,
      auth: store.auth,
      error: [],
      model: {
        aceitacao_proposta: "",
        justificacao_recusa: "",
        descricao: ""
      },

      schema: {
        fields: [
          {
            label: "Aceitação Proposta:",
            model: "aceitacao_proposta",
            type: "select",
            values: ["Aceite", "Recusada"],
            required: true
          },
          {
            label: "Justificação se recusada:",
            model: "justificacao_recusa",
            type: "input",
            inputType: "text",
            required: false,
            placeholder: "Insira a justificação"
          },
          {
            label: "Descrição:",
            model: "descricao",
            type: "textArea",
            hint: "Máximo 500 caracteres.",
            max: 500,
            rows: 4,
            required: true,
            placeholder: "Insira a descrição da proposta"
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },
  created() {
    // vai buscar a informação ao backend sobre o proposta

    var url = "/proposta";
    axios
      .post(
        url,
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
      .then(response => {
        this.model.aceitacao_proposta =
          response.data.proposta.Aceitação_Proposta;
        this.model.justificacao_recusa =
          response.data.proposta.Justificacao_Recusa;
        this.model.descricao = response.data.proposta.Descricao;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    guardarProposta() {
      axios
        .post(
          "/editarproposta",
          {},
          {
            params: {
              id: this.$route.query.id,
              Aceitação_Proposta: this.model.aceitacao_proposta,
              Justificacao_Recusa: this.model.justificacao_recusa,
              Descricao: this.model.descricao
            },
            headers: {
              authorization: this.token
            }
          }
        )
        .then(function(response) {
          console.log("success", response.data);
        })
        .catch(function(response) {
          console.log("error", response);
        });
      this.$router.replace({ path: "/listarpropostas" });
    },
    voltar() {
      this.$router.replace({ path: "/listarpropostas" });
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}
.bv-example-row {
  padding: 70px 0px;
}
</style>
