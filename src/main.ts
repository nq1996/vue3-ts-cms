import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式 npm i normalize.css
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
import globalRegister from './global'

// import nqRequest from './service'
// interface DataType {
//   data: any,
//   returnCode:string
//   success: boolean
// }
// nqRequest.request<DataType>({
//   url:'/home/multidata',
//   method: 'get',
//   interceptors: {
//     requestInterceptor:(config) => {
//       return config
//     },
//     responseInterceptor: (res)=>{
//       return res
//     }
//   },
//   showLoading: false
// }).then(res=>{
//   console.log(res)
// })
app.use(globalRegister)
app.use(store).use(router).mount('#app')
