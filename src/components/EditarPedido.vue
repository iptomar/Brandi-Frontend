<template>
<b-container v-if="auth.logged" class="bv-example-row">
  <h1>Editar Pedido</h1>

      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
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
        <br >
    <b-button @click="enviar()" variant="primary">Guardar</b-button>
     <b-button variant="primary" @click="voltar">Voltar</b-button>    
    </div>

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
      auth: store.auth,
      token: store.token,
      error: [],
      model: {
        titulo: "",
        descricao: "",
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
    var url = "/pedido";
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
        this.model.titulo = response.data.pedido.Titulo;
        this.model.descricao = response.data.pedido.Descricao;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    voltar() {
      this.$router.replace({ path: "/listarpedidos" });
    },
    enviar() {
      axios
        .post(
          "/editarpedido",
          {},
          {
            params: {
              id: this.$route.query.id,
              Titulo: this.model.titulo,
              Descricao: this.model.descricao
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
      this.$router.replace({ path: "/listarpedidos" });

      //  faz o post para api da foto
      /*if (this.image) {
        FormDataPost("/cliente/foto", this.image)
          .then(response => {
            if (response.data.success) {
              this.image = "";
              console.log("OK");
            }
          })
          .catch(err => {
            console.error(err);
          });
      }     
    },

    onChange(image) {
      console.log("Alterada");
      if (image) {
        console.log("Fotografia ok");
        this.image = image;
      } else {
        console.log("Erro, formato invalido");
      }*/
    }
  }
};
</script>

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