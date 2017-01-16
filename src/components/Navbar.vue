<template>
  <nav class="nav-bar">
    <router-link to="/">
      <img src="../assets/octodisklogo.png" class="logo img-responsive"    alt="">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
      height:60px;
      border-bottom:solid;
      border-width:1px;
  }
    .logo{
      height:60px;
      width: 100px;
    }
</style>
