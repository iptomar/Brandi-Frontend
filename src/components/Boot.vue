<template>
  <div></div>
</template>

<script>
import isLoggedMixin from '../mixins/logged'
import store from '../tools/store'

export default {
  name: 'Boot',
  mixins: [isLoggedMixin],
  data () {
    return {
      logged: false
    }
  },
  created () {
    this.checkIfLogged()
      .then(response => {
        store.auth.logged = response
      })
  }
}
</script>

<style lang="scss">
  $font-stack:    Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
</style>
