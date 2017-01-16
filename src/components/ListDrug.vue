<template> 
  <section class="main-view">
    <ListItem v-for="item in drugs" v-bind:drugItem="item" v-on:removeItem="removeDrug" /> 
  </section>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'ListDrug',
  props: ['drugs'],
  methods: {
    removeDrug: function () {
      console.log('call revieced')
      this.$emit('removeItem')
    }

  },
  data () {
    return {
    }
  },
  components: {
    ListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main-view {
      flex:1 1 auto;
      flex-wrap: wrap;
      padding:10px;
      display: flex;
      
   }

</style>
