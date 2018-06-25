<template>
  <div class="hello">
    <div class="bg"></div>
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
.bg {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
}

</style>
