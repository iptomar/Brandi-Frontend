<template>
<b-container v-if="auth.logged" class="bv-example-row">
  <h1>Editar Pedido</h1>

      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  <hr >
  <div class="hello">
        <picture-input 
        ref="pictureInput"
        width='200' 
        height="200" 
        margin="16" 
        accept="image/jpeg,image/png" 
        size="10" 
        button-class="btn"
        prefill=""
        :custom-strings="{
            upload: '<h1></h1>',
            drag: 'Arrastar Fotografia'
        }"
        @change="onChange">
        </picture-input>
    <hr>
     
    <b-button @click="enviar" variant="primary" >Guardar</b-button>
    <b-button @click="voltar" variant="primary" >Voltar</b-button>
    
    </div>
<br>
</b-container>

</template>
<script>
import PictureInput from "vue-picture-input";
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import isLoggedMixin from "../mixins/logged";
import store from "../tools/store";
import axios from "axios";

Vue.use(VueFormGenerator);

export default {
  name: "app",
  data() {
    return {
      token: store.token,
      auth: store.auth,
      error: [],
      model: {
        titulo: "",
        descricao: "",
        cliente: 0,
        fotografia:
          "https://c1.quickcachr.fotos.sapo.pt/i/G0f06fdc2/21076306_74Pe2.jpeg",
        tempo: "",
        status: true
      },
      schema: {
        fields: [
          {
            label: "Titulo:",
            model: "titulo",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Titulo do pedido"
          },
          {
            label: "Descricao:",
            model: "descricao",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Descricao do pedido"
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },
  components: {
    "vue-form-generator": VueFormGenerator.component,
    PictureInput
  },
  created() {
    // vai buscar a informação ao backend sobre o pedido

    axios
      .post(
        "/pedido",
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
        this.model.titulo = response.data.Pedido.Titulo;
        this.model.descricao = response.data.Pedido.Descricao;
        this.model.fotografia = response.data.Pedido.Fotografia;
        this.model.cliente = response.data.Pedido.ID_Cliente;
        this.model.tempo = response.data.Pedido.Data_Realizacao_Pedido;
      })
      .catch(e => {
        this.error.push(e);
      });
    console.log("erro" + this.model.titulo);
  },
  methods: {
    enviar() {
      //  faz o post para api da foto
      axios
        .post(
          "/editarpedido",
          {},
          {
            params: {
              id: this.$route.query.id,
              Titulo: this.model.titulo,
              Fotografia: this.model.fotografia,
              Descricao: this.model.descricao,
              ID_Cliente: this.model.cliente,
              Data_Realizacao_Pedido: this.model.tempo
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

      this.$router.replace("/ListarPedidos");
    },

    onChange(image) {
      console.log("Alterada");
      if (image) {
        console.log("Fotografia ok");
        this.image = image;
      } else {
        console.log("Erro, formato invalido");
      }
    },
    voltar() {
      this.$router.replace({ path: "/listarpedidos" });
    }
  }
};
</script>

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