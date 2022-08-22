import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface INqInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config:AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error:any) => any
  responseInterceptor?: (res:T) => T
  responseInterceptorCatch?: (error:any) => any
}
export interface INqRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: INqInterceptors<T>
  showLoading?: boolean
}
