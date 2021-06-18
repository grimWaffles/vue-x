export default{
    namespaced:true,
    state: {
      currentUsername:'',
      isAuth:false,
      token:''
    },
    mutations: {
        SET_AUTH(state){
            state.isAuth=!state.isAuth;
        },
        SET_USERNAME(state,name){
            state.currentUsername=name
        },
        SET_TOKEN(state,token){
            state.token=token
        }
    },
    actions: {
      getUsername({commit}){
          return state.currentUsername
      },
      getAuthState({commit}){
          return state.isAuth
      },
      setAuthState({commit}){
        commit('SET_AUTH')
      },
      setUsername({commit},username){
          commit('SET_USERNAME',username)
      },
      getToken({commit}){
        return state.token
      },
      setToken({commit},token){
        commit('SET_TOKEN',token)
      },

      loginUser({commit},user){
        
        //todo
        fetch('https://localhost:44313/api/login', {
          method: "POST",
          body: JSON.stringify({Username:user.email,Password:user.pass}),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
         
          console.log(json)
          commit('SET_AUTH');
          commit('SET_USERNAME',user.email)
          commit('SET_TOKEN',json)
         
        return true;
        });
        console.log("Returning false")
        return false;
      },

    },
  }