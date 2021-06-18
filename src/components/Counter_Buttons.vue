<template>
    <div class="buttons">
      <button @click="decrementCounter">-</button>
      <button @click="incrementCounter">+</button>
    </div>

    <div>
      <input type="text" placeholder="Enter color code"
       v-model="$store.state.count.colorCode">
    </div>
</template>

<script>
export default{

  name:'Counter_Buttons',
  methods:{
    incrementCounter(){
      this.$store.dispatch('count/increment')
      return
    },
    decrementCounter(){
      this.$store.commit('count/decrement')
      return
    }
  }
}</script>