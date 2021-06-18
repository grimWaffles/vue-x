<template>
    <div class="counter" :style="{color:$store.state.count.colorCode}">
      {{this.$store.state.count.counter}}
    </div>
</template>

<script>

export default{
    name:'Counter',
    props:{
      counter:String,colorCode:String}
  }

</script>