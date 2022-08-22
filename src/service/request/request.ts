import axios from "axios"
import type { AxiosInstance } from 'axios'
import type { INqInterceptors, INqRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib/components'
const DEFAULT_LOADING = true
class NqRequest {
  instance:AxiosInstance
  interceptors?: INqInterceptors
  showLoading: boolean
  loading: any
  constructor(config:INqRequestConfig){
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 实例拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 全局的拦截器
    this.instance.interceptors.request.use(config=>{
      if(this.showLoading){
          this.loading = ElLoading.service({
            lock: true,
            text: '请求中...',
            background: 'rgba(0,0,0,.5)'
         })
      }
      return config
    },error=>{
      return error
    })
    this.instance.interceptors.response.use(res=>{
      if(res.status === 200){
        this.loading?.close()
      }
      if(res.data.returnCode === '-1001'){
        console.log('请求失败')
      }
      return res.data

    },error=>{
      if(error.response.status === 404){
        console.log('404错误')
      }
      return error
    })
  }
  request<T>(config:INqRequestConfig<T>):Promise<T>{
    return new Promise((resolve,reject) => {
      // 单独请求拦截
      if(config.interceptors?.requestInterceptor){
        config = config.interceptors.requestInterceptor(config)
      }
      if(config.showLoading === false){
        this.showLoading = config.showLoading
      }
      this.instance.request<any,T>(config).then(res=>{
        // 单独响应拦截
        if(config.interceptors?.responseInterceptor){
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
        this.showLoading = DEFAULT_LOADING
      }).catch(err => {
        this.showLoading = DEFAULT_LOADING
        reject(err)
      })
    })
    
  }
  get<T>(config:INqRequestConfig<T>):Promise<T>{
    return this.request<T>({...config,method: 'get'})
  }
  post<T>(config:INqRequestConfig<T>):Promise<T>{
    return this.request<T>({...config,method: 'post'})
  }
  delete<T>(config:INqRequestConfig<T>):Promise<T>{
    return this.request<T>({...config,method: 'delete'})
  }
  patch<T>(config:INqRequestConfig<T>):Promise<T>{
    return this.request<T>({...config,method: 'patch'})
  }
}
export default NqRequest
