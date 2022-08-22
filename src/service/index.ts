import NqRequest from "./request/request"
import { BASE_URL, TIME_OUT} from './request/config'
export default new NqRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if(token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      console.log('实例请求拦截')
      return config
    }
  }
})
