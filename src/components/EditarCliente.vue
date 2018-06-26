<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Editar Cliente:</h1>
        <b-row  class="text-center">
            <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
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
      token: store.token,
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
    var url = "/cliente";
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
        this.model.id = response.data.cliente.id;
        this.model.nome = response.data.cliente.nome;
        this.model.contato = response.data.cliente.contacto;
        this.model.NIF = response.data.cliente.nif;
        this.model.morada = response.data.cliente.morada;
        this.model.email = response.data.cliente.email;
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
          "/editarcliente",
          {},
          {
            params: {
              id: this.model.id,
              nome: this.model.nome,
              nif: this.model.NIF,
              morada: this.model.morada,
              email: this.model.email,
              contacto: this.model.contato
            },
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(response) {
          console.log("success", response.data);
        })
        .catch(function(response) {
          console.log("error", response);
        });
      this.$router.replace({ path: "/listarclientes" });
    },
    voltar() {
      this.$router.replace({ path: "/listarclientes" });
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
