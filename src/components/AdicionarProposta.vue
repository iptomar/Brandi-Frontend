<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Proposta</h1>
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
        aceitacao_proposta: "",
        justificacao_recusa: "",
        descricao: "",
        data_elaboracao: "",
        data_envio: "",
        id_pedido: "",
        id_coordenador: ""
      },

      schema: {
        fields: [
          {
            label: "Aceitação/Rejeição Proposta",
            model: "aceitacao_proposta",
            type: "select",
            values: ["Aceite", "Recusada"],
            required: true
          },
          {
            label: "Justificação se Recusada",
            model: "justificacao_recusa",
            type: "input",
            inputType: "text",
            required: false,
            placeholder: "Ex.: Preço demasiado elevado"
          },
          {
            label: "Descrição da Proposta",
            model: "descricao",
            type: "textArea",
            hint: "Máx.: 500 caracteres",
            max: 500,
            rows: 4,
            required: true,
            placeholder: "Ex.: A proposta é constituída por..."
          },
          {
            label: "Data de Elaboração da Proposta",
            model: "data_elaboracao",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "Data de Envio da Proposta",
            model: "data_envio",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "ID do Pedido",
            model: "id_pedido",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do pedido"
          },
          {
            label: "ID do Coordenador",
            model: "id_coordenador",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do coordenador"
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
    guardarProposta() {
      axios
        .post(
          "/adicionarproposta",
          {},
          {
            params: {
              aceitacao_proposta: this.model.aceitacao_proposta,
              justificacao_recusa: this.model.justificacao_recusa,
              descricao: this.model.descricao,
              data_elaboracao: this.model.data_elaboracao,
              data_envio: this.model.data_envio,
              id_pedido: this.model.id_pedido,
              id_coordenador: this.model.id_coordenador
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
