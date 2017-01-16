<template>
  <div class="container">
  <Navbar />
  
 <div class="main-content">
  <Sidebar />
           <router-view :drugs="drugs" v-on:removeItem="removeDrug"
            v-on:editItem="editDrug" :itemToEdit="itemToEdit" v-on:addItem="addItem" 
            v-on:updateItem="upudateItem">
            </router-view>
 </div>
</div>

</template>

<script>
import Navbar from './Navbar'
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
    var drugsRef = firedb.ref('drugs')
    drugsRef.on('value', function (snap) {
      this.drugs = snap.val()
      console.log(snap.val())
    }.bind(this))
  },
  methods: {
    removeDrug: function (itemkey) {
      console.log('final removeItem', itemkey)
      var drugItemRef = firedb.ref('drugs').child(itemkey)
      drugItemRef.remove()
    },
    addDrug: function (itemkey) {
      var drugsRef = firedb.ref('drugs').push()
      drugsRef.set(itemkey)
    },
    editDrug: function (itemkey) {
      console.log('final edit', itemkey)
      this.itemToEdit = this.drugs[itemkey]

      console.log(this.itemToEdit.name)
      this.$router.push(`wholesaler/edit/${itemkey}`)
    },
    upudateItem: function (itemObject) {
      console.log('updateing')
      var drugItemRef = firedb.ref('drugs').child(itemObject.key)
      drugItemRef.update({name: itemObject.name, price: itemObject.price, quantity: itemObject.quantity}, function () {
        console.log('updated')
        this.$router.push('/wholesaler')
      }.bind(this))
    },
    addItem: function (item) {
      var drugsRef = firedb.ref('drugs').push()
      drugsRef.set(item, () => {
        console.log('item added')
      })
    }
  },
  data () {
    return {
      itemToEdit: {},
      drugs: []
    }
  },
  components: {
    Navbar,
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
