<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Adicionar Evento:</h1>
        <b-row  class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
        </b-row>
      <b-button v-on:click="guardar">Guardar</b-button>
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
            label: "Tipo:",
            model: "tipo",
            required: true,
            placeholder: "Designação do Objecto"
          },
          {
            label: "Descrição:",
            model: "descricao",
            type: "textArea",
			hint: "Máximo 200 caracteres.",
			max: 200,
			rows: 4,
            required: true,
            placeholder: "Insira a descrição do evento"
          },
          {
            label: "Data do evento:",
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
    // adicionar objecto
    guardar() {
      axios
        .post(
          "/adicionarEvento",
          {},
          {
            params: {
              descricao: this.model.descricao,
              data_evento: this.model.data_evento,
              tipo: this.model.tipo,
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
