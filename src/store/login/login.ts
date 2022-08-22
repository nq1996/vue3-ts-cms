import { Module } from "vuex"
import { ILoginState } from "./type"
import { IRootState } from "../type"
import {  accountLoginRequest } from '@/service/login/login'
const LoginModule:Module<ILoginState,IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    SAVE_TOKEN(state, token:string){
      state.token = token
    }
  },
  actions: {
    async accountLogin({ commit }, payload:any){
      console.log('触发登录了')
      const { data:{id, token} } = await accountLoginRequest(payload)
      commit('SAVE_KOKEN',token)
      
    }
  }
}
export default LoginModule