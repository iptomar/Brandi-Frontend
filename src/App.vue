<template>

  <div id="app">
    <app-boot></app-boot>
    <app-header></app-header>
    <hr/>
    <router-view/>
    <hr/>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Boot from '@/components/Boot'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-boot': Boot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
