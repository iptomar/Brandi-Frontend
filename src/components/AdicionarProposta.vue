<template>
  <b-container v-if="auth.logged" class="bv-example-row">
    <h1>Adicionar Proposta</h1>
    
      <b-container class="panel-body">
        <vue-form-generator :schema="schema" :model="model"  :options="formOptions"></vue-form-generator>
      </b-container>

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
      auth: store.auth,
      token: store.token,
      error: [],
      model: {
        aceitacao_proposta: "",
        justificacao_recusa: "",
        descricao: "",
        id_pedido: 0,
        id_coordenador: 0
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
    voltar() {
      this.$router.replace({ path: "/listarpropostas" });
    },
    guardarProposta() {
      axios
        .post(
          "/adicionarproposta",
          {},
          {
            headers: {
              authorization: this.token
            },
            params: {
              Aceitação_Proposta: this.model.aceitacao_proposta,
              Justificacao_Recusa: this.model.justificacao_recusa,
              Descricao: this.model.descricao,
              ID_Pedido: this.model.id_pedido,
              ID_Coordenador: this.model.id_coordenador
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.replace({ path: "/listarpropostas" });
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
</style>
