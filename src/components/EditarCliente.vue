<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1>Editar Cliente:</h1>
        <b-row class="panel panel-default">
          <b-container class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
          </b-container>
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
        id: "",
        nome: "",
        NIF: "",
        morada: "",
        email: "",
        contato: "",
        status: true
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Nome:",
            model: "nome",
            placeholder: "Your name",
            required: true,
            placeholder: "Nome do cliente"
          },
          {
            label: "NIF:",
            model: "NIF",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Número de Identificação Fiscal"
          },
          {
            label: "Morada:",
            model: "morada",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Morada do cliente"
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail:",
            model: "email",
            required: true,
            placeholder: "Email do Cliente"
          },
          {
            label: "Contato:",
            model: "contato",
            type: "input",
            inputType: "text",
            required: true,
            placeholder: "Número de Telefone"
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
    // vai buscar a informação ao backend sobre o cliente

    var cliente = this.$route.query.id;

    var url = "/clientes/" + cliente;
    axios
      .post(url)
      .then(response => {
        this.model.id = response.data[0].id;
        this.model.nome = response.data[0].Nome;
        this.model.contato = response.data[0].Contato;
        this.model.NIF = response.data[0].NIF;
        this.model.morada = response.data[0].Morada;
        this.model.email = response.data[0].Email;
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
              id: this.model.id,
              nome: this.model.nome,
              NIF: this.model.NIF,
              morada: this.model.morada,
              email: this.model.email,
              contato: this.model.contato
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
      this.$router.replace({ path: "/listarclientes" });
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
</style>
