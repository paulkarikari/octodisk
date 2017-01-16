<template>
  <div class="main-view">
    <div class="form-container">
       <h3>Edit Item</h3>
      <hr>
       <form  v-on:submit.prevent="saveEdit" class="form-horizontal">
        <label for="name">Product Name </label>    
        <input type="text" v-model.trim="name" name="name" class="form-control" placeholder="Name"  required="required"  title=""> 
       <br>
       <label for="name">Product Price </label> 
       <input type="text" v-model.trim="price" class="form-control" placeholder="Price"  required="required"  title="">
       <br>
       <label for="name">Product quantity </label> 
       <input type="text" v-model.trim="quantity" class="form-control" placeholder="Quantity"  required="required"  title="">
       <br>
       <button type="submit" class="btn btn-success">Save Changes</button> 
      </form>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditItem',
  props: ['itemToEdit'],
  methods: {
    saveEdit: function () {
      var itemData = {
        key: this.$route.params.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity
      }
      console.log(itemData)
      this.$emit('updateItem', itemData)
    }
  },
  mounted: function () {
  },
  data () {
    return {
      name: this.itemToEdit.name,
      price: this.itemToEdit.price,
      quantity: this.itemToEdit.quantity
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
