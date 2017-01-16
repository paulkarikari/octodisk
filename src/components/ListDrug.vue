<template> 
  <section class="main-view">
    <ListItem v-for="(item,key) in drugs" v-bind:itemkey="key" v-bind:drugItem="item" 
    v-on:removeItem="removeDrug" v-on:editItem="editDrug" /> 
  </section>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'ListDrug',
  props: ['drugs'],
  methods: {
    removeDrug: function (itemkey) {
      console.log('1removeDrug rec', itemkey)
      this.$emit('removeItem', itemkey)
    },
    editDrug: function (itemkey) {
      console.log('1editDrug rec', itemkey)
      this.$emit('editItem', itemkey)
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
