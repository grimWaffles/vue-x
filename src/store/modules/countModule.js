import axios from 'axios'

export default{
    namespaced:true,
    state: {
      counter:3,
      colorCode:'green',
      counterSquared:0
    },
    mutations: {
      increment(state,number){
        state.counter+=number
      },
      decrement(state){
        if(state.counter!='0'){
          state.counter--
        }
      },
      setColorCode(state,newColor){
        state.colorCode=newColor
      },
      setCounterSquared(state,number){
        state.counterSquared=number
      }
    },
    actions: {
      increment({commit}){
        console.log('increment(action)')
  
        axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
          .then(response=> {
            commit('increment',response.data)
          })
      },
      setColorCode({commit},newColor){
        commit('setColorCode',newColor)
      },
      setCounterSquared({commit}){
        num=state.counter*state.counter
        commit('setCounterSquared',num)
      }
      
    },
  }