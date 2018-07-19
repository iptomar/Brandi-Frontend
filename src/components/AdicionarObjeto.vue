<template>
  <b-container v-if="auth.logged" class="bv-example-row">
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
            label: "Designação do Objeto:",
            model: "designacao",
            required: true,
            placeholder: "Ex.: Cadeira do Século XIX"
          },
          {
            type: "input",
            inputType: "text",
            label: "Processo LCRM:",
            model: "processoLCRM",
            required: true,
            placeholder: "Inserir código do processo LCRM"
          },
          {
            type: "input",
            inputType: "text",
            label: "Processo CEARC:",
            model: "processoCEARC",
            required: true,
            placeholder: "Inserir código do processo CEARC"
          },
          {
            type: "input",
            inputType: "text",
            label: "Coordenação:",
            model: "coordenacao",
            required: true,
            placeholder: "Inserir nome do Coordenador"
          },
          {
            label: "Data de Abertura do Processo:",
            model: "dataProcesso",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "Data de Entrada LCRM:",
            model: "dataLCRM",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "Data de Entrada CEARC:",
            model: "dataCEARC",
            type: "input",
            inputType: "date",
            required: true
          },
          {
            label: "ID da Sub-Categoria:",
            model: "idSubcategoria",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID da Sub-Categoria"
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
          },
          {
            label: "Dimensão:",
            model: "dimensao",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Inserir Dimensão do Objecto"
          },
          {
            label: "ID do Dono da Obra:",
            model: "idDonoObra",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do Dono da Obra"
          },
          {
            label: "ID do Proprietário:",
            model: "idProprietario",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do Proprietario"
          },
          {
            label: "ID do Mecenas:",
            model: "idMecenas",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do Mecenas"
          },
          {
            label: "ID do Pedido:",
            model: "idPedido",
            type: "input",
            inputType: "number",
            required: true,
            placeholder: "Insira o ID do Pedido referente ao Objeto"
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
              processoLCRM: this.moedel.processoLCRM,
              processoCEARC: this.model.processoCEARC,
              coordenacao: this.model.coordenacao,
              dataProcesso: this.model.dataProcesso,
              dataLCRM: this.model.dataLCRM,
              dataCEARC: this.model.dataCEARC,
              idSubCategoria: this.model.idSubCategoria,
              tipologia: this.model.tipologia,
              localizacao: this.model.localizacao,
              dimensao: this.model.dimensao,
              donoObra: this.model.donoObra,
              proprietario: this.model.proprietario,
              idMecenas: this.model.idMecenas,
              idPedido: this.model.idPedido
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {});
      this.$router.replace({ path: "listarobjetos" });
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
