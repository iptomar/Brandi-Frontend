<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Editar Eventos:</h1>
        <b-row  class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
        </b-row>
      <b-button v-on:click="update">Guardar</b-button>
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
      token: store.token,
      auth: store.auth,
      model: {
        id: 0,
        descricao: "",
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
    axios
      .post(
        "/evento",
        {},
        {
          headers: {
            authorization: this.token,
            "Content-Type": "application/json"
          },
          params: {
            id: this.$route.query.id
          }
        }
      )
      .then(response => {
        this.model.descricao = response.data.evento.Descricao;
        this.model.tipo = response.data.evento.Tipo;
        console.log("success", response.data);
      })
      .catch(function(response) {
        console.log("error", response);
      });
  },
  methods: {
    // editar utilizador
    voltar() {
      this.$router.replace({ path: "/listareventos" });
    },
    update() {
      axios
        .post(
          "/editarevento",
          {},
          {
            params: {
              id: this.$route.query.id,
              descricao: this.model.descricao,
              tipo: this.model.tipo
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
      this.$router.replace({ path: "/listareventos" });
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
