<template>
  <div class="hello">
    HOME
    <h1>{{ auth.logged }}</h1>
  </div>
</template>

<script>
import store from '../tools/store'
export default {
  name: 'Home',
  data () {
    return {
      auth: store.auth
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
