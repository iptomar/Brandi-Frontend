<template>
    <!--<b-container v-if="auth.logged" class="bv-example-row">-->
    <b-container class="bv-example-row">
        <h1 align="left">Editar Análises Preliminares:</h1>
        <b-row  class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
        </b-row>
      <b-button v-on:click="update">Guardar</b-button>
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
      error: [],
      auth: store.auth,
      model: {
        idAnalise: "",
        descrAnalise: "",
        localRealizacao: "",
        dataRealizacao: "",
        horaInicio: "",
        horaFim: "",
        distDeslocacao: "",
        outrasDespesas: "",
        idObjeto: "",
        status: true
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Descrição:",
            model: "descrAnalise",
            placeholder: "Ex.: Registo fotográfico do objeto",
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Local de realização:",
            model: "localRealizacao",
            placeholder: "Ex.: Tomar",
            required: true
          },
          {
            type: "input",
            inputType: "date",
            label: "Data de realização:",
            model: "dataRealizacao",
            required: true
          },
          {
            type: "input",
            inputType: "time",
            label: "Hora de início:",
            model: "horaInicio",
            required: true
          },
          {
            type: "input",
            inputType: "time",
            label: "Hora de fim:",
            model: "horaFim",
            required: true
          },
          {
            type: "input",
            inputType: "number",
            label: "Distância da deslocação (km):",
            model: "distDeslocacao",
            placeholder: "Ex.: 20",
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Outras despesas:",
            model: "outrasDespesas",
            placeholder: "Ex.: Portagens"
          },
          {
            type: "input",
            inputType: "text",
            label: "Outras despesas:",
            model: "outrasDespesas",
            placeholder: "Ex.: Portagens"
          },
          {
            type: "input",
            inputType: "number",
            label: "Objeto ou conjunto de objetos:",
            model: "idObjeto",
            placeholder: "Ex.: 1"
          },
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },
  created() {
    // vai buscar a informação ao backend sobre as análises

    var analise = this.$route.query.id;

    var url = "/analises/" + analise;
    axios
      .post(url)
      .then(response => {
        this.model.idAnalise = response.data[0].idAnalise;
        this.model.descrAnalise = response.data[0].descrAnalise;
        this.model.localRealizacao = response.data[0].localRealizacao;
        this.model.dataRealizacao = response.data[0].dataRealizacao;
        this.model.horaInicio = response.data[0].horaInicio;
        this.model.horaFim = response.data[0].horaFim;
        this.model.distDeslocacao = response.data[0].distDeslocacao;
        this.model.outrasDespesas = response.data[0].outrasDespesas;
        this.model.idObjeto = response.data[0].idObjeto;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    // editar análise
    update() {
      axios
        .post(
          "/editar",
          {},
          {
            params: {
              idAnalise: this.model.idAnalise,
              descrAnalise: this.model.descrAnalise,
              localRealizacao: this.model.localRealizacao,
              dataRealizacao: this.model.dataRealizacao,
              horaInicio: this.model.horaInicio,
              horaFim: this.model.horaFim,
              distDeslocacao: this.model.distDeslocacao,
              outrasDespesas: this.model.outrasDespesas,
              idObjeto: this.model.idObjeto,
            },
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(response) {
          //Object.assign(this.$data,this.$options.data.call(this))
          console.log("success", response.data);
        })
        .catch(function(response) {
          console.log("error", response);
        });
      this.$router.replace({ path: "/listaranalises" });
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
