<template>
  <b-container v-if="auth.logged" class="container">
    <h1>Adicionar Pedido</h1>
    <b-row class="panel panel-default">
      <b-container class="panel-body">
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
            :custom-strings="{
                upload: '<h1></h1>',
                drag: 'Arrastar Fotografia'
            }"
            @change="onChange">
          </picture-input>
        </div>
      </b-container>
    </b-row>
    <b-button variant="primary" @click="enviar" v-bind:class="{ disabled: !image }">Guardar</b-button>
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
      error: [],
      model: {
        titulo: "",
        status: true
      },

      schema: {
        fields: [
          {
            label: "Titulo do Pedido",
            model: "titulo",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Ex.: Restauro da cadeira do Século XIX"
          },
          {
            label: "Descrição do Pedido",
            model: "Descricao",
            type: "input",
            inputType: "text",
            featured: true,
            required: true,
            placeholder: "Ex.: Neste restauro pretende-se..."
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
  methods: {
    enviar() {
      //  faz o post para api da foto
      if (this.image) {
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
      this.$router.replace("/listarpedidos");
    },

    onChange(image) {
      console.log("Alterada");
      if (image) {
        console.log("Fotografia OK");
        this.image = image;
      } else {
        console.log("Erro, no backend");
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}

.btn-primary {
  margin-bottom: 20px;
}
</style>
