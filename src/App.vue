<template>
   <router-view></router-view>
</template>

<script>


const router = new VueRouter({
  routes
})

export default {
  name: 'app',
  components: {
    AppLanding,
    AdminViewContainer
  },
  router
}
</script>

<style>
#app {
  width:100%;
 
}
</style>
