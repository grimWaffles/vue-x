<template>
  
  <div class="home" v-if="authenticated">
    <Nav/>
   
    <h5><b>Hello</b> {{username}} <b>With token:</b> {{token}}</h5>
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter :counter="1" :colorCode="colorCode" />
    <Counter_Squared/>
    <Counter_Buttons/>
  </div>

  <div class="home" v-else>
    <img alt="Vue logo" src="../assets/logo.png">
    <p><router-link to="/">Session Expired! Login again please</router-link></p>
  </div>

</template>

<script>
import Nav from '../components/Nav'
import Counter from '../components/Counter.vue'
import Counter_Squared from '../components/Counter_Squared.vue'
import store from '@/store/index.js'


export default {
  name: 'Home',
  setup(){
      const authenticated=store.state.auth.isAuth

      return {authenticated}
  },
  components: {
    Nav,
    Counter,
    Counter_Squared,
    Counter_Buttons:require('@/components/Counter_Buttons.vue').default
  },
  methods:{
    
  },
  computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newColor){
        this.$store.dispatch('setColorCode',newColor)
      },
    },
    username:{
      get(){return this.$store.state.auth.currentUsername}
    },
    token:{
      get(){
        return this.$store.state.auth.token
      }
    }
  },
}
</script>

<style>
  
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }
  .buttons button{
    font-size:40px;
    width:100px;
  }

</style>
