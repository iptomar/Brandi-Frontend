<template>
  <div class="hello bg-light">
      <p class="border-top pt-4 pb-4 mb-0">Copyright © {{ new Date().getFullYear() }} Laboratório de Conservação e Restauro - Instituto Politécnico de Tomar</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

div {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-weight: bold;
}

</style>
