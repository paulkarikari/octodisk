<template>
  <div class="container">
  <div class="text-content">
    <img src="../assets/octodisklogo.png" class="logo img-responsive"   alt="">
    <h1 class="words">A BETTER WAY</h1>
  </div>
  <div class="form-content">
    <form action="" method="get" accept-charset="utf-8">
        <input type="text" class="form-control" placeholder="Username" required="required" pattern="" title="">
        <br>
        <input type="text" class="form-control" placeholder="Password" required="required" pattern="" title="">
        <br>
        <button type="button" class="btn">Sign In</button>
    
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
     padding:0px;
     background-image:url("../assets/3.jpg");
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     -webkit-background-size: cover;
     -moz-background-size: cover;
      -o-background-size: cover;
      display: flex;
      padding:0px;
      margin:0px;
      width:100%;
      background-color:rgba(0,0,0,.5);
    }

    .text-content{
      flex:1 1 auto;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:column;

    }
    .form-content{
      flex:0 0 25em;
      height:100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right:30px;

    }

    .form-content .btn{
      background-color:#FF0066;
      color:white;
      font-weight:normal;
      font-size:20px;
    }
    .form-content form{
      display: flex;
        flex-direction:column;
        flex:1;
        padding:5px;            
    }

    .logo{
      height: 200px;
      width: 300px;
    }
    .words{
      color:white;
      text-align:center;
      font-family: 'Roboto', sans-serif;
      font-weight:100;
      font-size:50px;
    }

</style>
