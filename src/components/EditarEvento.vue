<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1>Editar Eventos:</h1>
        <b-row class="panel panel-default">
          <b-container class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          </b-container>
        </b-row>
      <b-button variant="primary" v-on:click="update">Guardar</b-button>
      <b-button variant="primary" v-on:click="voltar">Voltar</b-button>
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
        id_evento: "",
        descricao: "",
        dataEvento: "",
        pedido: "",
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

    var evento = this.$route.query.id;

    var url = "/evento";
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
        this.model.id = response.data.evento.id;
        this.model.descricao = response.data.evento.Descricao;
        this.model.tipo = response.data.evento.Tipo;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    voltar() {
      this.$router.replace({ path: "/listareventos" });
    },
    // editar utilizador
    update() {
      axios
        .post(
          "/editarevento",
          {},
          {
            params: {
              id: this.$route.query.id,
              descricao: this.model.descricao,
              tipo: this.model.tipo,
              pedido: this.model.pedido
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
