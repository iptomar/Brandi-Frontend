<template>
    <b-container v-if="auth.logged" class="bv-example-row">
        <h1>Editar Análises Preliminares:</h1>
         <b-row class="panel panel-default">
          <b-container class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          </b-container>
        </b-row>
        <b-button variant="primary" v-on:click="update">Guardar</b-button>
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
      error: [],
      auth: store.auth,
      token: store.token,
      model: {
        descrAnalise: "",
        localRealizacao: "",
        dataRealizacao: "",
        horaInicio: "",
        horaFim: "",
        distDeslocacao: "",
        outrasDespesas: "",
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
            required: false
          },
          {
            type: "input",
            inputType: "time",
            label: "Hora de início:",
            model: "horaInicio",
            required: false
          },
          {
            type: "input",
            inputType: "time",
            label: "Hora de fim:",
            model: "horaFim",
            required: false
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
    // vai buscar a informação ao backend sobre as análises

    var url = "/analise";

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
        this.model.descrAnalise = response.data.analise.Descricao_Analise;
        this.model.localRealizacao =
          response.data.analise.Locao_realizacao_Analise;
        this.model.dataRealizacao =
          response.data.analise.Data_Realizacao_Analise;
        this.model.horaInicio = response.data.analise.Inicio_Analise;
        this.model.horaFim = response.data.analise.Fim_Analise;
        this.model.distDeslocacao = response.data.analise.Distancia_Deslocacao;
        this.model.outrasDespesas = response.data.analise.Outras_Despesas;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    voltar() {
      this.$router.replace({ path: "/listaranalises" });
    },
    // editar análise
    update() {
      axios
        .post(
          "/editaranalise",
          {},
          {
            params: {
              id: this.$route.query.id,
              Descricao_Analise: this.model.descrAnalise,
              Locao_realizacao_Analise: this.model.localRealizacao,
              //this.model.dataRealizacao =
              //this.model.horaInicio = Inicio_Analise;
              //this.model.horaFim = Fim_Analise;
              Distancia_Deslocacao: this.model.distDeslocacao,
              Outras_Despesas: this.model.outrasDespesas
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
      this.$router.replace({ path: "/listaranalises" });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
}

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
.bv-example-row {
  padding: 70px 0px;
}
</style>
