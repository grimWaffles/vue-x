<template>
    <div class="counter-squared">
      {{$store.state.count.counter}}<sup>2</sup> = {{$store.state.count.counter*$store.state.count.counter}}
    </div>
</template>

<script>export default{name:'Counter_Squared'}</script>