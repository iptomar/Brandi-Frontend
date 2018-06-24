<template>
<div class="hello">

  <div class="container verticalCenter">
		<div class="horizontalCenter">

    <label for="uname"><b>Nome de Utilizador:</b></label>
    <input type="text" v-model="username" placeholder="Enter Username" name="uname" required>
    <label for="psw"><b>Password:</b></label>
    <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>
    <b-button variant="outline-primary" class="button" v-on:click="login">Login</b-button>
    <span>{{ msg }}</span>
    <label></label>
  </div>
	</div>
	<div class="bg"></div>
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
.bg {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.container {
	position: absolute;
}
.verticalCenter {
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform:  translateY(-50%);
	-moz-transform:  translateY(-50%);
	transform:  translateY(-50%);
	left: 0;
	right: 0;
}

.horizontalCenter {
	margin: 0 auto;
	width: 400px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  border: none;
  padding: 0.5em;
  border-radius: 2px;
  margin-bottom: 0.5em;
  color: #333;
}
input[type="text"]:focus, input[type="password"]:focus {
  outline: none;
  box-shadow: inset -1px -1px 3px rgba(0, 0, 0, 0.3);
}

label {
	font-size: 1.2em;
	text-align: left;
	width: 100%;
	color: #0069d9;
	font-weight: 200;
}

.button {
	margin-top: 14px;
	width: 100%;
}

span {
	padding-top: 20px;
	float: left;
}

</style>
