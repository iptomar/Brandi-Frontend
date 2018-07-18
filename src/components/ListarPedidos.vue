<template>
    <b-container v-if="auth.logged" class="bv-example-row">
    
    <h1>Lista de Pedidos</h1>    
    <hr>
    <button variant="primary" type="button" class="btn" v-on:click="novo()">Criar Pedido</button>
    <hr >
      <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cliente</th>
                <th scope="col">Data</th>
                <th scope="col">Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pedido of pedidos" v-bind:key="pedido.idPedido">
                <td>{{pedido.Titulo}}</td>
                <td>{{pedido.ID_Cliente}}</td>
                <td>{{pedido.Data_Realizacao_Pedido}}</td>
                <td>{{pedido.Descricao}}</td>
                <td><button type="button" class="btn btn-warning" v-on:click=editar(pedido.id)>Editar</button></td>
                <td><button type="button" class="btn btn-danger" v-on:click=apagar(pedido.id)>Arquivar</button></td>
                <td><button type="button" class="btn btn-green" v-on:click=criar_Objeto(pedido.id)>Criar Objeto</button></td>
            </tr>
            </tbody>
        </table>
 
 <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.id">
      {{error.message}}
    </li>
  </ul>
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
  data() {
    return {
      auth: store.auth,
      token: store.token,
      sideMenu: store.sideMenu,
      pedidos: [],
      errors: []
    };
  },

  created() {
     this.sideMenu.isOpen = !this.sideMenu.isOpen;
  axios
      .post(
        "/listarpedidos",
        {},
        {
          headers: {
            authorization: this.token
          }
        }
      )
      .then(response => {        
        this.pedidos = response.data.pedidos_clientes;      
      })
      .catch(function(error) {});
  },
  methods: {
    editar(num) {
      this.$router.push({ path: "/editarpedido", query: { id: num } });
    },
    apagar(num) {
      this.$router.push({ path: "/eliminarpedido", query: { id: num } });
    },
    criar_Objeto(){
      this.sideMenu.isOpen = !this.sideMenu.isOpen;
      this.$router.push({ path: "/form" });
    },
    novo() {      
      this.$router.push({ path: "/adicionarpedido" });
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
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bv-example-row{
  padding: 70px  0px
}

td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;font-weight:bold;}

</style>
