<template>
<div class="hello">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" v-model="username" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>

    <b-button v-on:click="login">Login</b-button>

    <h1>{{ msg }}</h1>
    <label>
   </label>
  </div>
</div>
</template>

<script>
import isLoggedMixin from '../mixins/logged'
import store from '../tools/store'

export default {
  name: 'Login',
  mixins: [isLoggedMixin],
  data () {
    return {
      username: null,
      password: null,
      msg: '',
      auth: store.auth
    }
  },
  created () {
    if (this.auth.logged === true) {
      this.$router.push({
        path: 'home'
      })
    }
  },
  methods: {
    login () {
      this.checkIfLogged(this.username, this.password)
        .then(response => {
          if (response === true) {
            this.$router.push({
              path: 'home'
            })
          } else {
            this.msg = 'Login failed'
          }
        })
        .catch(error => console.log(error))
    }
  }
}
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
