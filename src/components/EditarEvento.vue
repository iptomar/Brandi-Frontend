<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Editar Eventos:</h1>
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
        id_evento: "",
        descricao: "",
        dataEvento: "",
        tipo: "",
        status: true
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Descrição:",
            model: "descricao",
            required: true,
            placeholder: "Descrição do evento"
          },
          {
            label: "Data:",
            model: "dataEvento",
            type: "input",
            inputType: "date",
            required: true,
            placeholder: "Data do Evento"
          },
          {
            label: "Tipo:",
            model: "tipo",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Tipo de Evento"
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
    // vai buscar a informação ao backend sobre o evento

    var evento = this.$route.query.id;

    var url = "/eventos/" + evento;
    axios
      .post(url)
      .then(response => {
        this.model.id_evento = response.data[0].id_evento;
        this.model.descricao = response.data[0].descricao;
        this.model.dataEvento = response.data[0].dataEvento;
        this.model.tipo = response.data[0].tipo;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    // editar utilizador
    update() {
      axios
        .post(
          "/editar",
          {},
          {
            params: {
              id_evento: this.model.id_evento,
              descricao: this.model.descricao,
              dataEvento: this.model.dataEvento,
              tipo: this.model.tipo
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
      this.$router.replace({ path: "/eventos" });
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
