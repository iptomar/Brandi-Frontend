<template>
  <div class="hello">
    HEADER
    <h1>{{ auth.logged }}</h1>
    <button v-on:click="logout" v-if="auth.logged">Logout</button>
  </div>
</template>

<script>
import store from '../tools/store'

export default {
  name: 'Header',
  data () {
    return {
      auth: store.auth
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('keyo')
      this.auth.logged = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
