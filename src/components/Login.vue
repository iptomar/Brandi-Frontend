<template>
<div class="hello">
	<h1>Autenticação</h1>
	<br/>
  <div class="container">
    <label for="uname"><b>Nome de Utilizador:</b></label>
    <input type="text" v-model="username" placeholder="Enter Username" name="username" required>
	<br>
    <label for="psw"><b>Password:</b></label>	
    <input type="password" v-model="password" placeholder="Enter Password" name="password" required>
	<br>
    <b-button v-on:click="login">Login</b-button>

    <h1>{{ msg }}</h1>
    <label>
   </label>
  </div>
</div>
</template>

<script>
import isLoggedMixin from "../mixins/logged";
import store from "../tools/store";
import axios from "axios";

export default {
  name: "Login",
  mixins: [isLoggedMixin],
  data() {
    return {
      token: undefined,
      msg: "",
      auth: store.auth
      
    };
  },
  created() {
    if (this.auth.logged === true) {
      this.$router.push({
        path: "home"
      });
    }
  },
  methods: {
    login() {
      axios
        .post(
          "/login",
          {},
          {
            params: {
              username: this.username,
              password: this.password
            }
          }
        )
        .then(response => {
          this.token = response.data.token;
          this.checkIfLogged(this.token)          
        })

        .catch(function(error) {
          console.log(error);
        });
      this.$router.push({ path: "home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
