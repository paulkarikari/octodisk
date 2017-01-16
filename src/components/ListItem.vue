<template>
  <div class="drug-item card">
        <div class="item-info">
          <img src="../assets/4.jpg" class="drug-item-img img-responsive" alt="Image">
          <h3>Name : <span class="drug-item-info"> {{ drugItem.name }}</span> </h3>
          <h3>Price : <span class="drug-item-info">Gh&cent;  {{ drugItem.price }}</span></h3>
          <h3>Qty : <span class="drug-item-info"> {{ drugItem.quantity }}</span></h3>
        </div>
        <div class="options">
          <span title="Edit" v-on:click="editItem(itemkey)"> 
            <img src="../assets/content.png"  class="img-responsive" alt="Image"></span>
          <span href="/#" title="Delete" v-on:click="removeItem(itemkey)">
           <img src="../assets/rubbish-bin.png"  class="img-responsive" alt="Image"></span>
        </div> 
      </div>  
</template>

<script>
export default {
  name: 'hello',
  props: ['drugItem', 'itemkey'],
  methods: {
    removeItem: function (itemkey) {
      console.log(itemkey)
      this.$emit('removeItem', itemkey)
    },
    editItem: function (itemkey) {
      console.log(itemkey)
      this.$emit('editItem', itemkey)
    }
  },
  mounted () {
    // console.log(this.itemkey)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .drug-item{
    border:solid;
    border-width:1px;
    border-color:#d1d1d1;
    margin:10px;
    width:200px;
    cursor: pointer;
    flex: 0 0 12em;
    display:flex;
    flex-direction:column;

   }
   .item-info{
    flex-grow:1;
   }
   .drug-item-img{
      height:150px;
      width:200px;
   }
   .drug-item h3{
      margin:1px;
      font-size:16px;
      
   }

    .drug-item-info{
     font-weight:100;   
   }

   .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
   }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .options{
    display: flex;
    justify-content:flex-end;
    align-items:flex-end;
  }

  .options img {
    height: 26px;
    width: 26px;
    margin:5px;
    transition: ease-in;
  }

  .options img:hover{
    border:solid;
    border-width: .5px;
    border-color:#d1d1d1;
    
  }
</style>
