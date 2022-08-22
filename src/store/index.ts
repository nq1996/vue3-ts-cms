import { createStore } from 'vuex'
import { IRootState } from './type'
import LoginModule from './login/login'
export default createStore<IRootState>({
  state(){
    return {
      name: '弄晴'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    LoginModule
  }
})
