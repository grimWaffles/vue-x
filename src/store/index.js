import { createStore } from 'vuex'

import countModule from './modules/countModule'
import auth from './modules/auth'

export default createStore({
  modules: {
    count:countModule,
    auth:auth
  },
})
