<template>
  <b-container class="bv-example-row">
    <h1>Editar Proposta</h1>
    <b-row class="text-center">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </b-row>
    <b-button v-on:click="guardarProposta">Guardar</b-button>
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
            label: "Aceitação Proposta:",
            model: "aceitacao_proposta",
            type: "select",
			values: [
				"Aceite",
				"Recusada"
			],
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
          },
          {
            label: "Data de elaboração:",
            model: "data_elaboracao",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "Data de envio:",
            model: "data_envio",
            type: "input",
            inputType: "date",
            required: true
          },
		  {
            label: "ID do pedido:",
            model: "id_pedido",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do pedido"
          },
		  {
            label: "ID Coordenador:",
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
      axios.post("/editarproposta", {},
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
