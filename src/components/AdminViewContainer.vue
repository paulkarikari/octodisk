<template>
  <div class="container">
  <Nav />
  
 <div class="main-content">
  <Sidebar />
           <router-view :drugs="drugs" v-on:removeItem="removeDrug"></router-view>
 </div>
</div>
</template>

<script>
import Nav from './Nav'
import Sidebar from './Sidebar'
import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAdivTVvWDLjYRMyDMwA5NgkRIV46L7vHE',
  authDomain: 'octodisk-1097c.firebaseapp.com',
  databaseURL: 'https://octodisk-1097c.firebaseio.com',
  storageBucket: 'octodisk-1097c.appspot.com',
  messagingSenderId: '866213138873'
}
var FirebaseApp = Firebase.initializeApp(config)
var firedb = FirebaseApp.database()

export default {
  name: 'AdminContainer',
  mounted () {
    // var wholeSaleRef = firedb.ref('wholesalers').push()
    var drugsRef = firedb.ref('drugs')
    // drugsRef.set({name: 'paracetamol', quantity: 77, price: 455})
    // wholeSaleRef.set({name: 'Paul', email: 'xyz2@gmail.com', company: 'A labs'})
    drugsRef.on('value', function (snap) {
      this.drugs = snap.val()
    })
  },
  methods: {
    removeDrug: function () {
      console.log('removeItem')
      this.drugs = [{name: 'paracetamol', price: '4, 873', qty: 45}]
    },
    addDrug: function () {
      console.log('add drug')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      drugs: [{name: 'paracetamol', price: '4, 873', quantity: 45},
             {name: 'paracetamol', price: '4, 873', quantity: 45},
             {name: 'paracetamol', price: '4, 873', quantity: 45},
             {name: 'paracetamol', price: '4, 873', quantity: 45},
             {name: 'paracetamol', price: '4, 873', quantity: 45}
      ]
    }
  },
  components: {
    Nav,
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
      padding:0px;
      margin: 0px;
      height:100vh;
      width:100%;
  }
  .main-content{
    display: flex;
    padding:0px;
    align-items: flex-start;
    
  }

</style>
