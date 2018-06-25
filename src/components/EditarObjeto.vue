<template>
    <b-container  v-if="auth.logged"  class="bv-example-row">
        <h1 align="left">Editar Objeto:</h1>
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
			categoria: "Bens Culturais Móveis",
			subcategoria: "Retabulística",
			dimensao: "",
			tipologia: "",
			identificador:"",
			butao:""
      },
      schema: {
        fields: [
				{
					type: "input",
					inputType: "text",
					label: "ID",
					model: "id",
					inputName: "id",
					readonly: true,
					featured: true,
					required: false,
					disabled: false
				},
				{
					type: "input",
					inputType: "text",
					label: "Nome",
					model: "nome",
					inputName: "nome",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					placeholder: "Nome do objeto",
					validator: VueFormGenerator.validators.string
				},
				{
					type: "select",
					label: "Categoria",
					model: "categoria",
					inputName: "categoria",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					values: [
						"Bens Culturais Móveis"
					],
					validator: VueFormGenerator.validators.string
				},
				{
					type: "select",
					label: "Subcategoria",
					model: "subcategoria",
					inputName: "subcategoria",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					values: [
						"Retabulística",
						"Escultura",
						"Talha"
					],
					validator: VueFormGenerator.validators.string
				},
				{
					type: "input",
					inputType: "text",
					label: "Dimensão",
					model: "dimensao",
					inputName: "dimensao",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					placeholder: "Dimensão do objeto",
					validator: VueFormGenerator.validators.string
				}, 
				{
					type: "input",
					inputType: "text",
					label: "Tipologia",
					model: "tipologia",
					inputName: "tipologia",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					placeholder: "Tipologia do objeto",
					validator: VueFormGenerator.validators.string
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
    // vai buscar a informação ao backend sobre o objeto

    var objeto = this.$route.query.id;

    var url = "/objetos/" + objeto;
    axios
      .post(url)
      .then(response => {
        this.model.id = response.data[0].id;
        this.model.nome = response.data[0].Nome;
        this.model.categoria = response.data[0].categoria;
        this.model.subcategoria = response.data[0].subcategoria;
        this.model.dimensao = response.data[0].dimensao;
        this.model.tipologia = response.data[0].tipologia;
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  methods: {
    // editar objeto
    update() {
      axios
        .post(
          "/editar",
          {},
          {
            params: {
              id: this.model.id,
              nome: this.model.nome,
              categoria: this.model.categoria,
              subcategoria: this.model.subcategoria,
              dimensao: this.model.dimensao,
              tipologia: this.model.tipologia
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
      this.$router.replace({ path: "/listarobjetos" });
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
