<template>
  <aside class="side-bar">
      <div class="menu-item">
        <a href="#">
        <img src="../assets/medicine.png"  alt="Image">
        <h3>List Drugs</h3>
        </a>
      </div>
      <hr>

      <div class="menu-item">
        <a href="#">
        <img src="../assets/drugs.png"  alt="Image">
        <h3>Add Drug</h3>
        </a>
      </div>
             <hr>
      <div class="menu-item">
        <a href="#">
        <img src="../assets/graph.png"  alt="Image">
        <h3>Reports</h3>
        </a>
      </div>
  </aside>
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
.side-bar{
      flex:0 0 5em;
      background-color:#3E313C;
      padding:5px;
      height:90vh;
      
  }

   .menu{
      display: block;
      padding: none;

   }
   
   .menu-item{
    text-align:center;
    color:white;
   }
   .menu-item img{
      height:40px;
      width: 40px;
      padding:0px;
      margin:0px;

   }

   .menu-item h3{
      font-size:10px;
      font-family: Helvetica;
      font-weight:100;
      margin-top: 2px;
      padding:0px;
      text-align: center;

   }

   .menu-item a {
      text-decoration:none;
      color: white;
      text-align:center;
   }
</style>
