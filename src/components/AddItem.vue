<template>
  <div class="main-view">
    <div class="form-container">
       <h3>Add Item</h3>
      <hr>
       <form  v-on:submit.prevent="addItem" class="form-horizontal">
        <label for="name">Product Name </label>    
        <input type="text" v-model.trim="name" name="name" class="form-control" placeholder="Name"  required="required"  title=""> 
       <br>
       <label for="name">Product Price </label> 
       <input type="number" v-model.trim.number="price" class="form-control" placeholder="Price"  required="required"  title="">
       <br>
       <label for="name">Product quantity </label> 
       <input type="number" v-model.trim.number="quantity" class="form-control" placeholder="Quantity"  required="required"  title="">
       <br>
       <button type="submit" class="btn btn-success">Save Changes</button> 
      </form>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  methods: {
    addItem: function () {
      var itemData = {name: this.name, price: this.price, quantity: this.quantity}
      this.$emit('addItem', itemData)
      console.log(itemData)
    }
  },
  data () {
    return {
      name: '',
      price: '',
      quantity: ''
    }
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
      justify-content: center;
      
   }
.form-container{
      width:300px;
      text-align: center;
}
</style>
